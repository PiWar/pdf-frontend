// todo: вынести
import { ConvertInfo } from '@/shared/types/convertInfo';

export const CONVERTS_INFO: Record<string, ConvertInfo> = {
  img_to_pdf: {
    title: 'Изображения в PDF',
    description:
      'С легкостью конвертируйте изображения в PDF, сжимайте и объеденяйте в один файл.',
  },
  office_to_pdf: {
    title: 'Word, Excel в PDF',
    description: 'Конвертируйте файлы MS Office в PDF.',
  },
};
