import type { ServerSideProps } from '@/shared/types';
import { apiService } from '@/services/apiService';
import { isResponseError } from '@/shared/typeGuards';
import { redirect } from 'next/navigation';
import { FilesLoader } from '@/components/FilesLoader';
import { ConvertedFilesList } from '@/components/ConvertedFilesList';

type PageProps = ServerSideProps<{ uuid: string }>;

export default async function Conversion({ params: { uuid } }: PageProps) {
  const filesResponse = await apiService.getFiles(uuid);

  if (!isResponseError(filesResponse)) {
    return <ConvertedFilesList files={filesResponse.data.files} />;
  }

  const tokenResponse = await apiService.getCentrifugoToken();

  if (isResponseError(tokenResponse)) {
    return redirect('/');
  }

  return <FilesLoader uuid={uuid} token={tokenResponse.data.token} />;
}
