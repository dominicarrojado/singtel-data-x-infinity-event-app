import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLDivElement>;

export default function Alert({ className, children, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn(
        'text-center text-white text-[18px] tracking-[1px] italic',
        'sm:text-[22px]',
        className
      )}
    >
      {children}
    </div>
  );
}
