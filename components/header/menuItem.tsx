import Link from 'next/link';
import React, { ReactNode } from 'react';
import cn from 'classnames';
import { Routes } from '../../lib/types';

type Props = {
  href: Routes;
  isActive: boolean;
  children: ReactNode;
};

export default function MenuItem({ href, isActive, children }: Props) {
  return (
    <li className="flex">
      <Link href={href}>
        <a
          className={cn(
            'group relative flex min-w-[150px] py-[12px] px-[20px] italic font font-medium text-[18px] leading-[22px] tracking-[1px] uppercase',
            'transition-colors',
            'md:min-w-[220px] md:py-[18px] md:text-[22px] md:leading-[28px]',
            isActive
              ? 'bg-purple-450 text-white'
              : 'bg-white text-purple-450 hover:bg-purple-75'
          )}
          aria-current={isActive ? 'page' : undefined}
        >
          <div
            className={cn(
              'absolute inset-y-0 right-full w-0 h-0 border-solid border-r-[10px] border-y-transparent border-y-[23px] border-l-0',
              'transition-colors',
              'md:border-y-[32px]',
              isActive
                ? 'border-r-purple-450'
                : 'border-r-white group-hover:border-r-purple-75'
            )}
          />
          {children}
        </a>
      </Link>
    </li>
  );
}
