import Head from 'next/head';
import React from 'react';
import { getAssetUrl } from '../lib/assets';

export default function FontFaces() {
  return (
    <Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'DIN';
              font-style: normal;
              font-weight: 400;
              src: url('${getAssetUrl(
                'fonts/DIN-Regular.woff2'
              )}') format('woff2'),
                url('${getAssetUrl('fonts/DIN-Regular.woff')}') format('woff');
              font-display: swap;
            }
          
            @font-face {
              font-family: 'DIN';
              font-style: italic;
              font-weight: 400;
              src: url('${getAssetUrl(
                'fonts/DIN-Italic.woff2'
              )}') format('woff2'),
                url('${getAssetUrl('fonts/DIN-Italic.woff')}') format('woff');
              font-display: swap;
            }
          
            @font-face {
              font-family: 'DIN';
              font-style: normal;
              font-weight: 500;
              src: url('${getAssetUrl(
                'fonts/DIN-Medium.woff2'
              )}') format('woff2'),
                url('${getAssetUrl('fonts/DIN-Medium.woff')}') format('woff');
              font-display: swap;
            }
          
            @font-face {
              font-family: 'DIN';
              font-style: italic;
              font-weight: 500;
              src: url('${getAssetUrl(
                'fonts/DIN-MediumItalic.woff2'
              )}') format('woff2'),
                url('${getAssetUrl(
                  'fonts/DIN-MediumItalic.woff'
                )}') format('woff');
              font-display: swap;
            }
          
            @font-face {
              font-family: 'DIN';
              font-style: normal;
              font-weight: 700;
              src: url('${getAssetUrl(
                'fonts/DIN-Bold.woff2'
              )}') format('woff2'),
                url('${getAssetUrl('fonts/DIN-Bold.woff')}') format('woff');
              font-display: swap;
            }
          
            @font-face {
              font-family: 'DIN';
              font-style: italic;
              font-weight: 700;
              src: url('${getAssetUrl(
                'fonts/DIN-BoldItalic.woff2'
              )}') format('woff2'),
                url('${getAssetUrl(
                  'fonts/DIN-BoldItalic.woff'
                )}') format('woff');
              font-display: swap;
            }
          
            @font-face {
              font-family: 'DIN';
              font-style: normal;
              font-weight: 800;
              src: url('${getAssetUrl(
                'fonts/DIN-Black.woff2'
              )}') format('woff2'),
                url('${getAssetUrl('fonts/DIN-Black.woff')}') format('woff');
              font-display: swap;
            }
          
            @font-face {
              font-family: 'DIN';
              font-style: italic;
              font-weight: 800;
              src: url('${getAssetUrl(
                'fonts/DIN-BlackItalic.woff2'
              )}') format('woff2'),
                url('${getAssetUrl(
                  'fonts/DIN-BlackItalic.woff'
                )}') format('woff');
              font-display: swap;
            }
          `,
        }}
      />
    </Head>
  );
}
