import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLHeadingElement>;

export default function SectionTitle({ children, className, ...props }: Props) {
  return (
    <h2
      {...props}
      className={cn(
        'mb-[15px] text-center font-avenir text-[35px] leading-[1] uppercase',
        'xs:text-[40px]',
        'sm:mb-[20px] sm:pl-24 sm:text-left sm:text-[45px]',
        className
      )}
    >
      {children}
    </h2>
  );
}
