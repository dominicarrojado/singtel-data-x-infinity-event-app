import React, { HTMLProps } from 'react';
import cn from 'classnames';
import { inputBoxClassName } from './inputBox';

type Props = HTMLProps<HTMLTextAreaElement>;

export default function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      {...props}
      rows={9}
      className={cn(inputBoxClassName, 'italic resize-none', className)}
    />
  );
}
