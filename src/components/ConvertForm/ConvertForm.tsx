'use client';

import { ConvertInfo } from '@/shared/types/convertInfo';
import { ConvertSetting } from '@/shared/types/convertSetting';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { isNotNil, isResponseError } from '@/shared/typeGuards';
import { Nullable } from '@/shared/types/utility';
import { FileCard } from './components/FileCard';
import { RichFile } from '@/shared/types/richFile';
import { isImage } from '@/shared/utils/files/isImage';
import { dataUrlFromFile } from '@/shared/utils/files/dataUrlfromFile';
import { Option } from '@/components/ConvertForm/components/Option';
import { convertFiles } from '@/server-actions/convertFiles';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/shared/constants/routes';
import isEmpty from 'lodash/isEmpty';

type ConvertFormProps = {
  convertInfo: ConvertInfo;
  convertSetting: ConvertSetting;
  type: string;
};

export const ConvertForm = ({
  convertSetting,
  convertInfo,
  type,
}: ConvertFormProps) => {
  const [richFiles, setRichFiles] = useState<Nullable<RichFile[]>>();
  const inputId = 'files[]';
  const [state, formAction] = useFormState(convertFiles, {});
  const router = useRouter();
  const inputFileRef = useRef<Nullable<HTMLInputElement>>(null);

  const inputAcceptExt = useMemo(
    () =>
      convertSetting.available_extensions.map((ext) => `.${ext}`).join(', '),
    [convertSetting.available_extensions]
  );

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (isNotNil(files)) {
      const newRichFiles: RichFile[] = [];
      for (const file of Array.from(files)) {
        if (
          convertSetting.available_extensions.indexOf(
            file.name.split('.').pop() as string
          ) === -1
        ) {
          continue;
        }
        newRichFiles.push(
          isImage(file)
            ? {
                file,
                dataUrl: (await dataUrlFromFile(file)) ?? undefined,
              }
            : { file }
        );
      }
      setRichFiles(newRichFiles);
      return;
    }

    setRichFiles(null);
  };

  const handleRemoveFile = (fileName: string) => {
    setRichFiles((prevFiles) => {
      if (isNotNil(prevFiles)) {
        return prevFiles.filter((richFile) => richFile.file.name !== fileName);
      }
      return prevFiles;
    });
  };

  useEffect(() => {
    if (isEmpty(state)) {
      return;
    }
    if (!isResponseError(state)) {
      const uuid = (state as unknown as { uuid: string }).uuid;
      router.push(`${ROUTES.conversion}/${uuid}`);
    } else  {
      router.push(ROUTES.home);
    }
  }, [router, state]);

  return (
    <form className='flex flex-1 flex-col' action={formAction}>
      <input
        type='file'
        className='hidden h-0 w-0 opacity-0'
        accept={inputAcceptExt}
        name={inputId}
        onChange={handleInputChange}
        multiple
        id={inputId}
        ref={inputFileRef}
      />
      <input
        type='text'
        className='hidden h-0 w-0 opacity-0'
        name='key'
        value={type}
        readOnly
      />
      <input
        type='text'
        className='hidden h-0 w-0 opacity-0'
        name='extension'
        value='pdf'
        readOnly
      />
      {isNotNil(richFiles) && richFiles.length ? (
        <div className='flex flex-1 gap-4'>
          <div className='flex h-fit flex-1 flex-wrap items-start justify-center gap-2 p-2'>
            {richFiles.map((richFile, i) => {
              return (
                <FileCard
                  key={richFile.file.name}
                  richFile={richFile}
                  onRemove={handleRemoveFile}
                />
              );
            })}
          </div>
          <div className='mb-2 flex w-full max-w-96 flex-col bg-white p-4'>
            <div className='flex-1'>
              <p className='text-center text-xl font-semibold'>Параметры</p>
              <hr className='my-2' />
              <div className='space-y-2'>
                {convertSetting.context.map((name) => (
                  <Option key={name} name={name} />
                ))}
              </div>
            </div>

            <div className='space-y-2'>
              <label
                role='button'
                className='block select-none rounded border-2 border-[#A0C49D] px-4 py-2 text-center text-lg transition-all hover:border-[#90b08d] active:scale-95 md:px-6 md:py-3'
                htmlFor={inputId}
              >
                Изменить файлы
              </label>
              <button className='block w-full select-none rounded bg-[#A0C49D] px-4 py-2 text-lg text-white transition-all hover:bg-[#90b08d] active:scale-95 md:px-6 md:py-3'>
                Конвертировать
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center p-2 md:p-4'>
          <h1 className='mb-2 text-center text-xl font-medium lg:mb-3 lg:text-2xl'>
            {convertInfo.title}
          </h1>
          <p className='mb-6 text-center text-neutral-700 lg:text-xl'>
            {convertInfo.description}
          </p>
          <label
            role='button'
            className='select-none rounded bg-[#A0C49D] px-4 py-2 text-lg text-white transition-all hover:bg-[#90b08d] active:scale-95 md:px-6 md:py-3'
            htmlFor={inputId}
          >
            Выбрать файлы
          </label>
        </div>
      )}
    </form>
  );
};
