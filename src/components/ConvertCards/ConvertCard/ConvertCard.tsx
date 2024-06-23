'use client';

import { useRouter } from 'next/navigation';
import { ConvertCardProps } from '@/components/ConvertCards/types';

// todo: поддержать icon
export const ConvertCard = ({
  title,
  description,
  uri,
  icon,
}: ConvertCardProps) => {
  const router = useRouter();

  const handleClick = () => router.push(uri);

  return (
    <div
      onClick={handleClick}
      className='group flex w-full max-w-80 flex-col gap-y-3 rounded-lg bg-white p-4 shadow transition-colors hover:cursor-pointer'
    >
      <span className='size-10 rounded bg-[#A0C49D] transition-transform group-hover:scale-110'></span>
      <span className='text-lg'>{title}</span>
      <span className='text-xs text-gray-500 transition-colors group-hover:text-gray-600'>
        {description}
      </span>
    </div>
  );
};
