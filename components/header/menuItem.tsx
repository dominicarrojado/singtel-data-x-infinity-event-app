import Link from 'next/link';
import React, { HTMLProps } from 'react';
import cn from 'classnames';
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
            'group pt-[30px] pb-[12px] px-[20px] text-[15px] leading-[1] select-none',
            'transition-colors',
            'xs:text-[20px]',
            'sm:px-[24px] sm:text-[30px]',
            className,
            isActive
              ? 'bg-sky-350'
              : 'bg-sky-450 hover:bg-sky-475 active:bg-sky-350'
          )}
          aria-current={isActive ? 'page' : undefined}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
