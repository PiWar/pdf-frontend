'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren, ReactNode, useMemo } from 'react';
import cn from 'classnames';

type HeaderLinkProps = PropsWithChildren<{
  href: string;
  withDefaultStyle?: boolean;
  className?: string;
}>;

const getDefaultStyle = (isActive: boolean) =>
  twMerge(
    'rounded-lg px-2 font-mono text-lg font-semibold tracking-wide flex items-end outline-none transition-colors hover:text-[#A0C49D]',
    isActive ? 'text-[#A0C49D]' : ''
  );

export const HeaderLink = ({
  href,
  children,
  className,
  withDefaultStyle = true,
}: HeaderLinkProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  const styles = useMemo(
    () => cn(withDefaultStyle ? getDefaultStyle(isActive) : '', className),
    [isActive, withDefaultStyle, className]
  );

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
};
