import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
};

export default function InputContainer({ children }: Props) {
  return (
    <div className={cn('flex flex-col gap-[8px] w-full', 'sm:gap-[15px]')}>
      {children}
    </div>
  );
}
