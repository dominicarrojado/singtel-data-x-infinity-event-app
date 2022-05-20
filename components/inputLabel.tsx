import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLLabelElement>;

export default function InputLabel({ children, className, ...props }: Props) {
  return (
    <label
      {...props}
      className={cn(
        'block text-[18px] leading-7 tracking-[1px] uppercase',
        'sm:text-[22px]',
        className
      )}
    >
      {children}
    </label>
  );
}
