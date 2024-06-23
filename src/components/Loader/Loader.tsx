import { BiLoaderCircle } from 'react-icons/bi';
import { LoaderProps } from '@/components/Loader/types';

export const Loader = ({ size = 60 }: LoaderProps) => {
  return (
    <BiLoaderCircle size={size} className='animate-spin-slow text-[#A0C49D]' />
  );
};
