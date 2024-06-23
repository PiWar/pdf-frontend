import { Logo } from '@/components/Logo';
import { ShowFooter } from '@/components/Transitions/ShowFooter';

export const Footer = () => {
  return (
    <ShowFooter className='flex select-none items-end bg-white px-6 py-2 shadow '>
      <Logo />
      <span className='text-sm sm:text-base'> - твой PDF конвертер ❤️</span>
    </ShowFooter>
  );
};
