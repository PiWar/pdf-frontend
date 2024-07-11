import { isResponseError } from '@/shared/typeGuards';
import { apiService } from '@/services/apiService';
import { ConvertCards } from '@/components/ConvertCards';
import { CONVERTS_INFO } from '@/shared/constants/convertsInfo';
import { ROUTES } from '@/shared/constants/routes';
import { RootError } from '@/components/RootError';

export default async function RootPage() {
  const response = await apiService.getTypesSettings();

  if (isResponseError(response)) {
    return <RootError />;
  }

  return (
    <div>
      <h1 className='mx-auto w-fit p-2 text-center text-xl font-medium md:p-4 lg:text-2xl'>
        Удобные инструменты для работы с PDF в одном месте!
      </h1>
      <ConvertCards
        // todo: вынести в маппинг
        cards={Object.keys(response.data)
          .filter((convertType) => convertType in CONVERTS_INFO)
          .map((convertType) => ({
            ...CONVERTS_INFO[convertType],
            uri: `${ROUTES.convert}/${convertType}`,
          }))}
      />
    </div>
  );
}
