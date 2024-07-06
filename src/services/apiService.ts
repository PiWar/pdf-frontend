import { api } from '@/api';
import { ConvertSetting } from '@/shared/types/convertSetting';
import { ConvertedFile } from '@/shared/types/convertedFiles';

export const apiService = {
  getTypesSettings: async () => {
    return await api.get<Record<string, ConvertSetting>>({
      uri: 'api/v1/process/types',
      config: {
        cache: 'no-store'
      }
    });
  },

  sendFiles: async (data: FormData) => {
    return api.post<{
      uuid?: string;
    }>({
      uri: 'api/v1/process/files',
      data,
    });
  },

  getCentrifugoToken: async () => {
    return api.get<{ token: string }>({
      uri: 'api/v1/centrifugo/token/anonymous',
      config: {
        cache: 'no-store' // change to invalidate after 24 hours
      }
    });
  },

  getFiles: async (uuid: string) => {
    return api.get<{ files: ConvertedFile[] }>({
      uri: `api/v1/process/${uuid}/files`, // check if it get data from cache on different machines
    });
  },
} as const;
