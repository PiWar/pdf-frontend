import { useEffect, useState } from 'react';
import { sseService } from '@/services/sseService';
import { ConvertedFile } from '@/shared/types/convertedFiles';

export const useConversion = (uuid: string, token: string) => {
  const [files, setFiles] = useState<ConvertedFile[]>();

  useEffect(() => {
    const es = sseService.getFiles(uuid, token, (data) => setFiles(data));

    return () => {
      es.close();
    };
  }, []);

  return { files };
};
