import React, { HTMLProps } from 'react';
import cn from 'classnames';
import ButtonArrow from './buttonArrow';

type Props = HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset';
};

export const buttonClassName = cn(
  'group relative inline-block bg-white py-[12px] px-[30px] text-purple-450 font-medium text-[18px] leading-[22px] tracking-[1px] italic uppercase select-none',
  'transition-colors hover:bg-purple-75 active:bg-purple-450 active:text-white',
  'sm:py-[18px] sm:text-[22px] sm:leading-[28px]'
);

export default function Button({
  type = 'button',
  children,
  className,
  ...props
}: Props) {
  return (
    <button {...props} type={type} className={cn(buttonClassName, className)}>
      <ButtonArrow direction="left" />
      <ButtonArrow direction="right" />
      {children}
    </button>
  );
}
