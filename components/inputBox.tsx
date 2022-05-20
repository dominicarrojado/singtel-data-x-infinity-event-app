import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLInputElement>;

export const inputBoxClassName = cn(
  'block w-full border border-transparent p-[12px] text-purple-450 text-[18px] leading-[1] tracking-[1px] text-ellipsis outline-none placeholder:text-purple-450 placeholder:opacity-60',
  'sm:text-[22px] sm:p-[17px]',
  'transition-colors focus:ring-[3px] focus:ring-black focus:border-black',
  'placeholder:transition-opacity focus:placeholder:opacity-0'
);

export default function InputBox({ className, ...props }: Props) {
  return <input {...props} className={cn(inputBoxClassName, className)} />;
}
