import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import Header from './header';
import Footer from './footer';
import { Route } from '../lib/types';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const { pathname } = useRouter();
  const isRouteHome = pathname === Route.HOME;
  const isRouteEnter = pathname === Route.ENTER;
  const isRouteGallery = pathname === Route.GALLERY;

  return (
    <div className="flex flex-col min-h-full">
      <div
        className={cn('flex-1 w-full max-w-[800px] mx-auto bg-sky-375', {
          'bg-repeat-y': isRouteHome || isRouteGallery,
          'bg-bottom': isRouteHome,
          'bg-top': isRouteEnter || isRouteGallery,
        })}
        style={{
          backgroundImage: `url(${getAssetUrl(
            isRouteEnter
              ? 'images/bg-futuristic-fold-top.jpeg'
              : 'images/bg-futuristic-fold-bottom.jpeg'
          )})`,
        }}
      >
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
