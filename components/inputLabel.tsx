import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLLabelElement>;

export default function InputLabel({ children, className, ...props }: Props) {
  return (
    <label
      {...props}
      className={cn(
        'block text-[24px] leading-8',
        'xs:text-[26px]',
        'sm:text-[28px]',
        className
      )}
    >
      {children}
    </label>
  );
}
