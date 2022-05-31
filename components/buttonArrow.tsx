import React from 'react';
import cn from 'classnames';
import ChevronRightIcon from '@heroicons/react/outline/ArrowRightIcon';

export default function ButtonArrow() {
  return (
    <ChevronRightIcon
      className={cn(
        'inline-block w-14 ml-2 -translate-x-1',
        'transition-transform group-hover:translate-x-0',
        'xs:w-16',
        'sm:w-20 sm:ml-3 sm:-translate-x-2 sm:group-hover:-translate-x-1'
      )}
    />
  );
}
