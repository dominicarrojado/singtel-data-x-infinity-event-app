import React, { HTMLProps } from 'react';
import cn from 'classnames';
import { inputBoxErrorClassName } from './inputBox';

type Props = HTMLProps<HTMLTextAreaElement> & {
  hasError?: boolean;
};

export default function Textarea({ className, hasError, ...props }: Props) {
  return (
    <textarea
      {...props}
      rows={7}
      className={cn(
        'block w-full border-[3px] rounded-none p-[12px] font-myriadpro text-white text-[18px] leading-[1] text-ellipsis outline-none placeholder:text-white placeholder:opacity-60',
        'sm:text-[22px] sm:p-[17px]',
        'transition-colors focus:ring-[2px] focus:ring-black focus:border-black disabled:bg-gray-200',
        'placeholder:transition-opacity focus:placeholder:opacity-0',
        !hasError ? 'border-white' : inputBoxErrorClassName,
        'border-white bg-sky-550 font-myriadpro resize-none',
        className
      )}
    />
  );
}
