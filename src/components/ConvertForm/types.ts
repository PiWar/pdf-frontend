import { GetRecordValue } from '@/shared/types/utility';
import { CONVERTS_INFO } from '@/shared/constants/convertsInfo';

export type ConvertFormProps = {
  convertInfo: GetRecordValue<typeof CONVERTS_INFO, keyof typeof CONVERTS_INFO>;
};
