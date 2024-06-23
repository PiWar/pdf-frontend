import { getEnv } from '@/shared/utils/env';
import { ConvertedFile } from '@/shared/types/convertedFiles';
import { isNotNil } from '@/shared/typeGuards';

type GetFilesDataHandler = (data: ConvertedFile[]) => void;

export const sseService = {
  getFiles: (uuid: string, token: string, onData?: GetFilesDataHandler) => {
    const url = new URL(
      process.env.NEXT_PUBLIC_API_URI + '/connection/uni_sse'
    );
    url.searchParams.append(
      'cf_connect',
      JSON.stringify({ token, subs: { [uuid]: { recover: true } } })
    );

    const es = new EventSource(url);

    es.onmessage = (e: MessageEvent) => {
      const data = JSON.parse(e.data);

      let files = null;

      if (data?.connect?.subs?.[uuid]?.publications?.length) {
        files = data.connect.subs[uuid].publications[0].data.files;
      }

      if (data?.pub?.data?.files) {
        files = data.pub?.data.files;
      }

      if (isNotNil(files)) {
        onData?.(files);
      }
    };

    return es;
  },
} as const;
