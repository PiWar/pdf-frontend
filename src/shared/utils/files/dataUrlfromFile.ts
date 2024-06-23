import { isNotNil } from '@/shared/typeGuards';

export const dataUrlFromFile = async (file: File) => {
  try {
    const readerPromise = new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) =>
        resolve(isNotNil(e.target?.result) ? (e.target.result as string) : '');
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });

    return await readerPromise;
  } catch (e) {
    console.error(e);
    return Promise.resolve(null);
  }
};
