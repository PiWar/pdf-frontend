import type { ServerSideProps } from '@/shared/types';
import { apiService } from '@/services/apiService';
import { isResponseError } from '@/shared/typeGuards';
import { redirect } from 'next/navigation';
import { FilesLoader } from '@/components/FilesLoader';
import { ConvertedFilesList } from '@/components/ConvertedFilesList';
import {ROUTES} from "@/shared/constants/routes";

type PageProps = ServerSideProps<{ uuid: string }>;

export default async function Conversion({ params: { uuid } }: PageProps) {
  const response = await apiService.getFiles(uuid);

  if (!isResponseError(response)) {
    return <ConvertedFilesList files={response.data.files} />;
  }

  const tokenResponse = await apiService.getCentrifugoToken();

  if (isResponseError(tokenResponse)) {
    return redirect(ROUTES.home);
  }

  return <FilesLoader uuid={uuid} token={tokenResponse.data.token} />;
}
