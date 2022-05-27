import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = Omit<HTMLProps<HTMLDivElement>, 'children'>;

export default function UnexpectedError({ className, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn('text-center text-white text-[18px] italic', className)}
    >
      An unexpected error occurred. Sorry for the inconvenience, please try
      again.
    </div>
  );
}
