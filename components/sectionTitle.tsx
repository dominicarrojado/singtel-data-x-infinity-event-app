import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  prefix?: string;
  children: ReactNode;
};

export default function SectionTitle({ prefix, children }: Props) {
  return (
    <h2
      className={cn(
        'text-center text-[26px] leading-10 text-shadow',
        'sm:text-[32px]'
      )}
    >
      {prefix && (
        <>
          <span>{prefix}</span>{' '}
        </>
      )}
      <span className="font-medium uppercase italic">{children}</span>
    </h2>
  );
}
