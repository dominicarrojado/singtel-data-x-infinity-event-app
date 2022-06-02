import React, { ReactNode } from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';

type Props = { children: ReactNode };

export default function EntryTitle({ children }: Props) {
  return (
    <div
      className={cn(
        'relative pt-[50px] pb-[30px] mx-auto mb-[40px] z-10',
        'xs:pt-[80px]',
        'sm:pt-[100px] sm:pb-[40px]'
      )}
    >
      <img
        src={getAssetUrl('images/illus-ladybug-in-leaf.png')}
        alt="ladybug in a leaf"
        width="408"
        height="401"
        className={cn(
          'absolute inset-0 mx-auto w-auto h-[100%] aspect-[408/401] select-none -z-10',
          'transform -translate-x-20',
          'xs:-translate-x-36',
          'sm:-translate-x-48'
        )}
        draggable={false}
      />
      <h1
        className={cn(
          'max-w-[245px] mx-auto pl-[75px] text-[40px] leading-[1] text-left uppercase z-10',
          'xs:max-w-[325px] xs:text-[60px]',
          'sm:max-w-[405px] sm:text-[80px]'
        )}
      >
        {children}
      </h1>
    </div>
  );
}
