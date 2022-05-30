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
    <header
      className={cn(
        'flex items-end justify-between px-[20px] pb-[6px]',
        'xs:pb-[20px]',
        'sm:items-end sm:pb-[25px] sm:px-[40px]'
      )}
    >
      <div role="navigation" aria-label="Menu">
        <ul className={cn('flex gap-[10px]', 'xs:gap-[15px]', 'sm:gap-[20px]')}>
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
      <Link href={Route.HOME}>
        <a
          className={cn(
            'inline-block -mb-[6px] ml-[15px] select-none',
            'xs:-mb-[20px]',
            'sm:-mb-[25px] sm:ml-[40px]'
          )}
          aria-current={pathname === Route.HOME ? 'page' : undefined}
        >
          <img
            src={getAssetUrl('images/logo-singtel.png')}
            alt="Singtel"
            width="145"
            height="80"
            className={cn(
              'w-auto h-[48px] aspect-[87/48]',
              'xs:h-[53px] xs:aspect-[96/53]',
              'sm:h-[64px] sm:aspect-[116/64]'
            )}
          />
        </a>
      </Link>
    </header>
  );
}
