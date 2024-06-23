import { FileCardProps } from '@/components/ConvertForm/components/FileCard/types';
import { FaFile, FaXmark } from 'react-icons/fa6';
import { useCallback } from 'react';
import { isDefined } from '@/shared/typeGuards';

export const FileCard = ({ onRemove, richFile }: FileCardProps) => {
  const handleIconClick = useCallback(() => {
    onRemove(richFile.file.name);
  }, [richFile.file.name, onRemove]);

  return (
    <div className='group relative flex w-full max-w-52 select-none flex-col items-center rounded-md bg-white p-2 shadow'>
      <FaXmark
        size={20}
        onClick={handleIconClick}
        className='absolute right-1 top-1 hidden cursor-pointer rounded-full bg-neutral-200 p-1 shadow group-hover:block'
      />
      <div className='w-full p-4'>
        {isDefined(richFile.dataUrl) ? (
          <img
            src={richFile.dataUrl}
            alt={richFile.file.name}
            className='aspect-[3/4] w-full object-contain object-center shadow-md'
          />
        ) : (
          <div className='flex aspect-[3/4] w-full items-center justify-center shadow-md'>
            <FaFile size={50} className='text-[#A0C49D]' />
          </div>
        )}
      </div>
      <p
        className='w-full truncate text-center text-sm text-gray-500'
        title={richFile.file.name}
      >
        {richFile.file.name}
      </p>
    </div>
  );
};
