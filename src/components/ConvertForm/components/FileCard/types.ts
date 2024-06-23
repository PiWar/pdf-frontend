import { RichFile } from '@/shared/types/richFile';

export type FileCardProps = {
  onRemove: (fileName: string) => void;
  richFile: RichFile;
};
