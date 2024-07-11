import { OptionProps } from '@/components/ConvertForm/components/Option/types';
import { Options } from '@/shared/constants/options';

export const Option = ({ name }: OptionProps) => {
  return (
    <label className='group block cursor-pointer'>
      <input
        type='checkbox'
        name='context[]'
        className='peer hidden h-0 w-0 opacity-0'
        value={name}
      />
      <div className='rounded-md border-2 border-neutral-200 px-4 py-2 text-center transition-colors group-hover:border-neutral-300 peer-checked:border-[#A0C49D]'>
        {Options[name] ?? name}
      </div>
    </label>
  );
};
