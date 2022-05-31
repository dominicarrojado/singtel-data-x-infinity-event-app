import { useRouter } from 'next/router';
import React, { ReactNode, useMemo } from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import Header from './header';
import { Route } from '../lib/types';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const { pathname } = useRouter();
  const isRouteHome = pathname === Route.HOME;
  const isRouteEnter = pathname === Route.ENTER;
  const isRouteGallery = pathname === Route.GALLERY;
  const isRouteGalleryView = pathname === Route.GALLERY_VIEW;
  const bgImgSrc = useMemo(() => {
    let src;

    if (isRouteEnter) {
      src = 'images/bg-futuristic-fold-top.jpeg';
    } else if (isRouteGallery) {
      src = 'images/bg-futuristic-fold-middle.jpeg';
    } else {
      src = 'images/bg-futuristic-fold-bottom.jpeg';
    }

    return getAssetUrl(src);
  }, [isRouteEnter, isRouteGallery]);

  return (
    <div className="flex flex-col min-h-full">
      <div
        className={cn(
          'flex-1 flex flex-col w-full max-w-[800px] mx-auto bg-sky-550',
          {
            'bg-repeat-y': isRouteGallery,
            'bg-bottom': isRouteHome || isRouteGalleryView,
            'bg-top': isRouteEnter || isRouteGallery,
          }
        )}
        style={{
          backgroundImage: `url(${bgImgSrc})`,
        }}
      >
        <Header />
        <main className="flex flex-col flex-1">{children}</main>
      </div>
    </div>
  );
}
