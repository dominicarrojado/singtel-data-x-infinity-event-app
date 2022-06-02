import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLDivElement>;

export default function Alert({ className, children, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn(
        'font-avenir text-center text-[18px]',
        'sm:text-[22px]',
        className
      )}
    >
      {children}
    </div>
  );
}
