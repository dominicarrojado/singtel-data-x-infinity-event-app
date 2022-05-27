import Head from 'next/head';
import React, { Fragment } from 'react';
import { getAssetUrl } from '../lib/assets';
import { FONTS } from '../lib/constants';

export default function FontPreLoader() {
  return (
    <Head>
      {FONTS.map((font, idx) => (
        <Fragment key={idx}>
          <link
            rel="preload"
            href={getAssetUrl(`fonts/${font}.woff2`)}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={getAssetUrl(`fonts/${font}.woff2`)}
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Fragment>
      ))}
    </Head>
  );
}
