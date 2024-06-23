import { ConvertCardSkeleton } from '@/components/ConvertCards/ConvertCard/ConvertCard.skeleton';

export const ConvertCardsSkeleton = ({ count = 5 }: { count?: number }) => {
  return (
    <div className='grid-col-convert-cards mx-auto grid w-full justify-center justify-items-center gap-2 px-2 py-4 xl:container sm:gap-4 sm:p-4'>
      {Array(count).map((key) => (
        <ConvertCardSkeleton key={key} />
      ))}
    </div>
  );
};
