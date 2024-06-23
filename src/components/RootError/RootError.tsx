'use client';

import { useRouter } from 'next/navigation';
import { FaArrowRotateLeft } from 'react-icons/fa6';

export const RootError = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.refresh();
  };

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-x-5 gap-y-3 sm:flex-row'>
      <h1 className='text-lg font-semibold'>Упс! Что-то пошло не так.</h1>
      <div
        tabIndex={0}
        role='button'
        onClick={handleButtonClick}
        className='flex items-center gap-x-2 rounded-lg bg-[#A0C49D] p-2 text-white shadow transition-colors'
      >
        <span>Попробовать снова</span>
        <FaArrowRotateLeft size='20px' className='transition-transform' />
      </div>
    </div>
  );
};
