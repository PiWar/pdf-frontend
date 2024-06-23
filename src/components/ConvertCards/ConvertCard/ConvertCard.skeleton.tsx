export const ConvertCardSkeleton = () => {
  return (
    <div className='flex w-full max-w-80 animate-pulse flex-col gap-y-3 rounded-lg bg-white p-4 shadow'>
      <div className='h-10 w-10 rounded bg-gray-200'></div>
      <div className='h-4 w-1/2 rounded bg-gray-200'></div>
      <div className='h-4 w-full rounded bg-gray-200'></div>
      <div className='h-4 w-full rounded bg-gray-200'></div>
    </div>
  );
};
