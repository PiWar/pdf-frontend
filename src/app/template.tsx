import { PropsWithChildren } from 'react';
import { ChangePage } from '@/components/Transitions/ChangePage';

export default function RootTemplate({ children }: PropsWithChildren) {
  return <ChangePage className='flex flex-1 flex-col'>{children}</ChangePage>;
}
