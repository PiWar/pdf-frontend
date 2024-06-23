import { FC } from 'react';
import { ConvertCard } from './ConvertCard';
import { ConvertCardsProps } from '@/components/ConvertCards/types';
import { GetRecordValue } from '@/shared/types/utility';

const defaultCards: GetRecordValue<ConvertCardsProps, 'cards'> = [];

export const ConvertCards: FC<ConvertCardsProps> = ({
  cards = defaultCards,
}) => {
  return (
    <div className='grid-col-convert-cards mx-auto grid w-full justify-center justify-items-center gap-2 px-2 py-4 xl:container sm:gap-4 sm:p-4'>
      {cards.map((card) => {
        return <ConvertCard key={card.title} {...card} />;
      })}
    </div>
  );
};
