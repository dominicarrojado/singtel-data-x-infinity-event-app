import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../../lib/assets';
import { Route } from '../../lib/types';
import MenuItem from './menuItem';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  const galleryOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === Route.GALLERY_VIEW) {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <header className={cn('flex items-center justify-between', 'sm:items-end')}>
      <Link href={Route.HOME}>
        <a
          className={cn('inline-block ml-[15px] select-none', 'sm:ml-[40px]')}
          aria-current={pathname === Route.HOME ? 'page' : undefined}
        >
          <img
            src={getAssetUrl(
              'images/logo-cnb-anti-drug-abuse-campaign-2017.png'
            )}
            alt="For A #DrugFreeSG | Anti-Drug Abuse Campaign 2017"
            width="149"
            height="234"
            className={cn(
              'w-auto h-[157px] aspect-[100/157]',
              'sm:h-[234px] sm:aspect-[149/234]'
            )}
          />
        </a>
      </Link>
      <div role="navigation" aria-label="Menu">
        <ul
          className={cn('flex flex-col items-end gap-[10px]', 'sm:gap-[17px]')}
        >
          <MenuItem href={Route.ENTER} isActive={pathname === Route.ENTER}>
            Enter
          </MenuItem>
          <MenuItem
            href={Route.GALLERY}
            isActive={pathname === Route.GALLERY}
            onClick={galleryOnClick}
          >
            Gallery
          </MenuItem>
        </ul>
      </div>
    </header>
  );
}
