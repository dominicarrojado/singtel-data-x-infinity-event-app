import React, { HTMLProps } from 'react';
import cn from 'classnames';
import ButtonArrow from './buttonArrow';
import { ButtonArrowDirection, ButtonVariant } from '../lib/types';

type Props = HTMLProps<HTMLButtonElement> & {
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
};

export const buttonClassName = cn(
  'group relative inline-block bg-white py-[12px] px-[30px] font-medium text-[18px] leading-[22px] tracking-[1px] italic uppercase select-none',
  'transition-colors disabled:opacity-50 disabled:pointer-events-none',
  'sm:py-[18px] sm:text-[22px] sm:leading-[28px]'
);
export const buttonDefaultClassName = cn(
  'bg-white text-purple-450',
  'hover:bg-purple-75 active:bg-purple-450 active:text-white'
);
export const buttonPrimaryClassName = cn(
  'bg-purple-450 text-white',
  'hover:bg-purple-550 active:bg-purple-650'
);

export default function Button({
  type = 'button',
  variant = ButtonVariant.DEFAULT,
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      type={type}
      className={cn(buttonClassName, className, {
        [buttonDefaultClassName]: variant === ButtonVariant.DEFAULT,
        [buttonPrimaryClassName]: variant === ButtonVariant.PRIMARY,
      })}
    >
      <ButtonArrow variant={variant} direction={ButtonArrowDirection.LEFT} />
      {children}
      <ButtonArrow variant={variant} direction={ButtonArrowDirection.RIGHT} />
    </button>
  );
}
