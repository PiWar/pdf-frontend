import type { ServerSideProps } from '@/shared/types';
import { apiService } from '@/services/apiService';
import { isResponseError } from '@/shared/typeGuards';
import { redirect } from 'next/navigation';
import { ConvertForm } from '@/components/ConvertForm';
import { CONVERTS_INFO } from '@/shared/constants/convertsInfo';
import { ROUTES } from '@/shared/constants/routes';

type PageProps = ServerSideProps<{ type: string }>;

export default async function ConvertType({ params: { type } }: PageProps) {
  const response = await apiService.getTypesSettings();

  if (isResponseError(response)) {
    return redirect(ROUTES.home);
  }

  //todo: придумать как проверять, по идее тут должно быть все ок
  const settings = response.data[type];

  return (
    <ConvertForm
      convertInfo={CONVERTS_INFO[type]}
      convertSetting={settings}
      type={type}
    />
  );
}
