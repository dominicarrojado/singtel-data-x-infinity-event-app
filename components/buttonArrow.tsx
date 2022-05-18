import React from 'react';
import cn from 'classnames';

type Props = {
  direction: 'left' | 'right';
  isActive?: boolean;
};

export default function ButtonArrow({ direction, isActive }: Props) {
  const isLeft = direction === 'left';

  return (
    <div
      className={cn(
        'absolute inset-y-0 w-0 h-0 border-solid border-y-transparent border-y-[23px]',
        'transition-colors',
        'sm:border-y-[32px]',
        {
          'right-full border-r-[10px] border-l-0': isLeft,
          'left-full border-l-[10px] border-r-0': !isLeft,
          'border-r-purple-450': isLeft && isActive,
          'border-r-white group-hover:border-r-purple-75 group-active:border-r-purple-450':
            isLeft && !isActive,
          'border-l-purple-450': !isLeft && isActive,
          'border-l-white group-hover:border-l-purple-75 group-active:border-l-purple-450':
            !isLeft && !isActive,
        }
      )}
    />
  );
}
