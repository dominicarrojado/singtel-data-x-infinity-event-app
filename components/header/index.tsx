import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../../lib/assets';
import { Routes } from '../../lib/types';
import MenuItem from './menuItem';

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className={cn('flex items-center justify-between', 'md:items-end')}>
      <Link href={Routes.HOME}>
        <a className={cn('inline-block ml-[15px]', 'md:ml-[40px]')}>
          <img
            src={getAssetUrl(
              'images/logo-cnb-anti-drug-abuse-campaign-2017.png'
            )}
            alt="For A #DrugFreeSG | Anti-Drug Abuse Campaign 2017"
            className={cn(
              'w-auto h-[157px] aspect-[100/157]',
              'md:h-[234px] md:aspect-[149/234]'
            )}
          />
        </a>
      </Link>
      <div role="navigation" aria-label="Menu">
        <ul
          className={cn('flex flex-col items-end gap-[10px]', 'md:gap-[17px]')}
        >
          <MenuItem href={Routes.ENTER} isActive={pathname === Routes.ENTER}>
            Enter
          </MenuItem>
          <MenuItem
            href={Routes.GALLERY}
            isActive={pathname === Routes.GALLERY}
          >
            Gallery
          </MenuItem>
        </ul>
      </div>
    </header>
  );
}
