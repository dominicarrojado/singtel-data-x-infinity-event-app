import React from 'react';
import cn from 'classnames';

export default function LoaderShimmer() {
  return (
    <div
      className={cn(
        'absolute top-0 left-0 w-full h-full bg-gray-250 bg-shimmer bg-[length:500px_100%]',
        'animate-shimmer'
      )}
    />
  );
}
