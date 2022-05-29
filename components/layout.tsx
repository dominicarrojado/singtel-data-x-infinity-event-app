import React, { ReactNode } from 'react';
import { getAssetUrl } from '../lib/assets';
import Header from './header';
import Footer from './footer';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-full">
      <div
        className="flex-1 w-full max-w-[800px] mx-auto bg-red-550 bg-top bg-repeat-y"
        style={{
          backgroundImage: `url(${getAssetUrl(
            'images/bg-vibrant-colors-striped.png'
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
