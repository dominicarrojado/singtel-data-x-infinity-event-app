import React, { HTMLProps } from 'react';
import cn from 'classnames';
import ButtonArrow from './buttonArrow';

type Props = HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset';
  withArrow?: boolean;
};

export const buttonClassName = cn(
  'group relative inline-flex items-center bg-sky-450 p-[10px] font-medium text-[18px] leading-[22px] select-none',
  'transition-colors hover:bg-sky-475 active:bg-sky-350 disabled:opacity-50 disabled:pointer-events-none',
  'xs:p-[15px] xs:text-[20px] xs:leading-[24px]',
  'sm:p-[20px] sm:text-[30px] sm:leading-[34px]'
);

export default function Button({
  type = 'button',
  withArrow,
  children,
  className,
  ...props
}: Props) {
  return (
    <button {...props} type={type} className={cn(buttonClassName, className)}>
      {children}
      {withArrow && <ButtonArrow />}
    </button>
  );
}
