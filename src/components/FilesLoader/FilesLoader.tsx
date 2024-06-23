'use client';

import { FilesLoaderProps } from '@/components/FilesLoader/types';
import { isDefined, isNotNil } from '@/shared/typeGuards';
import { Loader } from '@/components/Loader';
import { useConversion } from '@/hooks/useConversion';
import { ConvertedFilesList } from '@/components/ConvertedFilesList';

export const FilesLoader = ({ uuid, token }: FilesLoaderProps) => {
  const { files } = useConversion(uuid, token);

  return isNotNil(files) ? (
    <ConvertedFilesList files={files} />
  ) : (
    <div className='flex flex-1 items-center justify-center'>
      <Loader />
    </div>
  );
};
