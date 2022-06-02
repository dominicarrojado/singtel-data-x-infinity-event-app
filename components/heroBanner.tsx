import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';

export default function HeroBanner() {
  return (
    <div
      className={cn('mb-[10px] select-none', 'xs:mb-[15px]', 'sm:mb-[25px]')}
    >
      <img
        src={getAssetUrl(
          'images/logo-infinite-possibilities-infinite-data.png'
        )}
        alt="Infinite possibilities. Infinite data."
        width="977"
        height="82"
        className="block w-full h-auto aspect-[977/82]"
      />
      <h1 className={cn('mt-[15px]', 'sm:mt-[25px]')}>
        <img
          src={getAssetUrl('images/logo-data-x-infinity.png')}
          alt="Data X Infinity"
          width="976"
          height="85"
          className="block w-full h-auto aspect-[976/85]"
        />
      </h1>
    </div>
  );
}
