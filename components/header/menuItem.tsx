import Link from 'next/link';
import React, { HTMLProps, ReactNode } from 'react';
import cn from 'classnames';
import ButtonArrow from '../buttonArrow';
import { Route } from '../../lib/types';

type Props = HTMLProps<HTMLAnchorElement> & {
  href: Route;
  isActive: boolean;
};

export default function MenuItem({
  children,
  href,
  className,
  isActive,
  ...props
}: Props) {
  return (
    <li className="flex">
      <Link href={href}>
        <a
          {...props}
          className={cn(
            'group relative flex min-w-[150px] py-[12px] px-[20px] font-medium text-[18px] leading-[22px] tracking-[1px] italic uppercase select-none',
            'transition-colors',
            'sm:min-w-[220px] sm:py-[18px] sm:text-[22px] sm:leading-[28px]',
            className,
            isActive
              ? 'bg-purple-450 text-white'
              : 'bg-white text-purple-450 hover:bg-purple-75 active:bg-purple-450 active:text-white'
          )}
          aria-current={isActive ? 'page' : undefined}
        >
          <ButtonArrow direction="left" isActive={isActive} />
          {children}
        </a>
      </Link>
    </li>
  );
}
