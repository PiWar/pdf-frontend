import { EnvKeys } from '@/shared/types';

export const getEnv = (key: EnvKeys) => {
  return process.env[key] as string;
};
