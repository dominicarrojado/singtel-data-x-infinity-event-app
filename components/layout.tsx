import React, { ReactNode } from 'react';
import { getAssetUrl } from '../lib/assets';
import FontFaces from './fontFaces';
import Footer from './footer';
import Header from './header';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div
        className="max-w-[800px] min-h-full mx-auto bg-red-550 bg-top bg-repeat-y"
        style={{
          backgroundImage: `url(${getAssetUrl(
            'images/bg-vibrant-colors-striped.png'
          )})`,
        }}
      >
        <FontFaces />
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
