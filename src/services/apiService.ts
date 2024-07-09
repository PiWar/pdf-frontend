import { ConvertSetting } from '@/shared/types/convertSetting';
import { ConvertedFile } from '@/shared/types/convertedFiles';
import { get, post } from '@/utils/fetch';

export const apiService = {
  getTypesSettings: async () => {
    return await get<Record<string, ConvertSetting>>({
      uri: '/api/v1/process/types',
      config: {
        cache: 'no-store',
        withClientInfo: true,
      }
    });
  },

  sendFiles: async (data: FormData) => {
    return post<{
      uuid?: string;
    }>({
      uri: '/api/v1/process/files',
      data,
    });
  },

  getCentrifugoToken: async () => {
    return get<{ token: string }>({
      uri: '/api/v1/centrifugo/token/anonymous',
      config: {
        cache: 'no-store' // change to invalidate after 24 hours
      }
    });
  },

  getFiles: async (uuid: string) => {
    return get<{ files: ConvertedFile[] }>({
      uri: `/api/v1/process/${uuid}/files`, // check if it get data from cache on different machines
    });
  },
} as const;
