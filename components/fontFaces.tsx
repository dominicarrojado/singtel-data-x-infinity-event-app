import Head from 'next/head';
import React, { Fragment } from 'react';
import { getAssetUrl } from '../lib/assets';
import { FONTS } from '../lib/constants';

export default function FontFaces() {
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Museo 500';
              font-style: normal;
              font-weight: 400;
              src: url('${getAssetUrl(
                'fonts/Museo500-Regular.woff2'
              )}') format('woff2'),
                url('${getAssetUrl(
                  'fonts/Museo500-Regular.woff'
                )}') format('woff');
              font-display: swap;
            }

            @font-face {
              font-family: 'Avenir';
              font-style: normal;
              font-weight: 400;
              src: url('${getAssetUrl(
                'fonts/Avenir-Regular.woff2'
              )}') format('woff2'),
                url('${getAssetUrl(
                  'fonts/Avenir-Regular.woff'
                )}') format('woff');
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Myriad Pro';
              font-style: normal;
              font-weight: 400;
              src: url('${getAssetUrl(
                'fonts/MyriadPro-Regular.woff2'
              )}') format('woff2'),
                url('${getAssetUrl(
                  'fonts/MyriadPro-Regular.woff'
                )}') format('woff');
              font-display: swap;
            }
          `,
        }}
      />
    </Head>
  );
}
