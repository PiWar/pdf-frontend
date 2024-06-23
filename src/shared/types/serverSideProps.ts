type SearchParams = Record<string, string | string[] | undefined>;

export type ServerSideProps<Params extends Record<string, string | string[]>> =
  {
    params: Params;
    searchParams: SearchParams;
  };
