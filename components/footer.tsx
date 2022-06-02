import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';

export default function Footer() {
  return (
    <div
      className={cn('flex justify-end mt-auto pt-[40px]', 'sm:-mt-28 sm:pt-0')}
    >
      <img
        src={getAssetUrl('images/illus-coconut-trees.png')}
        alt="coconut trees"
        width="657"
        height="914"
        className={cn('w-[80%] aspect-[657/914]', 'xs:w-[70%]', 'xs:w-[60%]')}
      />
    </div>
  );
}
