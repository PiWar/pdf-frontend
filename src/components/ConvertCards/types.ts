import { ConvertInfo } from '@/shared/types/convertInfo';

export type ConvertCardData = {
  uri: string;
} & ConvertInfo;

export type ConvertCardProps = ConvertCardData;

export type ConvertCardsProps = {
  cards?: ConvertCardData[];
};
