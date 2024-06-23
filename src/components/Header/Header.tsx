import { HeaderLink } from '@/components/Header/components/HeaderLink';
import { Logo } from '@/components/Logo';
import { ShowHeader } from '@/components/Transitions/ShowHeader';

export const Header = () => {
  return (
    <ShowHeader className='w-full p-2 md:px-4'>
      <div className='mx-auto flex gap-x-4 rounded-full bg-white px-8 py-2 shadow 2xl:container '>
        <HeaderLink href={'/'} withDefaultStyle={false}>
          <Logo />
        </HeaderLink>
      </div>
    </ShowHeader>
  );
};
