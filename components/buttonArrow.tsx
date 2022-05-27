import React from 'react';
import cn from 'classnames';
import { ButtonArrowDirection, ButtonVariant } from '../lib/types';

type Props = {
  variant?: ButtonVariant;
  direction: ButtonArrowDirection;
  isActive?: boolean;
};

export default function ButtonArrow({
  variant = ButtonVariant.DEFAULT,
  direction,
  isActive,
}: Props) {
  const isVariantDefault = variant === ButtonVariant.DEFAULT;
  const isVariantPrimary = variant === ButtonVariant.PRIMARY;
  const isDirectionLeft = direction === ButtonArrowDirection.LEFT;
  const isDirectionRight = direction === ButtonArrowDirection.RIGHT;

  return (
    <div
      className={cn(
        'absolute inset-y-0 w-0 h-0 border-solid border-y-transparent border-y-[23px]',
        'transition-colors',
        'sm:border-y-[32px]',
        {
          'right-full border-r-[10px] border-l-0': isDirectionLeft,
          'left-full border-l-[10px] border-r-0': isDirectionRight,
          'border-r-white group-hover:border-r-purple-75 group-active:border-r-purple-450':
            isVariantDefault && isDirectionLeft && !isActive,
          'border-l-white group-hover:border-l-purple-75 group-active:border-l-purple-450':
            isVariantDefault && isDirectionRight && !isActive,
          'border-r-purple-450':
            isVariantDefault && isDirectionLeft && isActive,
          'border-l-purple-450':
            isVariantDefault && isDirectionRight && isActive,
          'border-r-purple-450 group-hover:border-r-purple-550 group-active:border-r-purple-650':
            isVariantPrimary && isDirectionLeft && !isActive,
          'border-l-purple-450 group-hover:border-l-purple-550 group-active:border-l-purple-650':
            isVariantPrimary && isDirectionRight && !isActive,
          'border-r-purple-650':
            isVariantPrimary && isDirectionLeft && isActive,
          'border-l-purple-650':
            isVariantPrimary && isDirectionRight && isActive,
        }
      )}
    />
  );
}
