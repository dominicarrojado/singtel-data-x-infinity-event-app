import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLInputElement> & {
  hasError?: boolean;
};

export const inputBoxClassName = cn(
  'block w-full border rounded-none p-[12px] text-purple-450 text-[18px] leading-[1] tracking-[1px] text-ellipsis outline-none placeholder:text-purple-450 placeholder:opacity-60',
  'sm:text-[22px] sm:p-[17px]',
  'transition-colors focus:ring-[3px] focus:ring-black focus:border-black disabled:bg-gray-200',
  'placeholder:transition-opacity focus:placeholder:opacity-0'
);
export const inputBoxPrimaryClassName = cn('border-transparent');
export const inputBoxErrorClassName = cn(
  'border-red-500 ring-[3px] ring-red-500'
);

export default function InputBox({ className, hasError, ...props }: Props) {
  return (
    <input
      {...props}
      className={cn(
        inputBoxClassName,
        !hasError ? inputBoxPrimaryClassName : inputBoxErrorClassName,
        className
      )}
    />
  );
}
