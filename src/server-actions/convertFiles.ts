'use server';

import { apiService } from '@/services/apiService';

export const convertFiles = async (prevState: any, formData: FormData) => {
  return await apiService.sendFiles(formData);
};
