import { ConvertedFilesListProps } from '@/components/ConvertedFilesList/types';

export const ConvertedFilesList = ({ files }: ConvertedFilesListProps) => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-y-5'>
      {files.map((file) => {
        return (
          <a
            key={file.name}
            href={process.env.NEXT_PUBLIC_API_URI + file.href}
            className='block w-[500px] select-none rounded bg-[#A0C49D] px-4 py-2 text-center text-lg text-white transition-all hover:bg-[#90b08d] active:scale-95 md:px-6 md:py-3'
          >
            {file.name}
          </a>
        );
      })}
    </div>
  );
};
