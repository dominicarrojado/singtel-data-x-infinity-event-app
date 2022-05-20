import React, { HTMLProps } from 'react';
import cn from 'classnames';
import PencilAltIcon from '@heroicons/react/outline/PencilAltIcon';

type Props = HTMLProps<HTMLLabelElement>;

export default function InputFileLabelText({
  children,
  className,
  ...props
}: Props) {
  return (
    <label
      {...props}
      className={cn(
        'flex items-center gap-[5px] mt-[5px] text-[14px] uppercase cursor-pointer select-none',
        'sm:absolute sm:top-full sm:left-0',
        'transition-opacity hover:opacity-70',
        className
      )}
    >
      <PencilAltIcon className="h-4 w-4" />
      {children}
    </label>
  );
}
