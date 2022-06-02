import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
};

export default function SectionContainer({ children }: Props) {
  return (
    <div className={cn('py-[20px]', 'xs:py-[25px]', 'sm:py-[30px]')}>
      {children}
    </div>
  );
}
