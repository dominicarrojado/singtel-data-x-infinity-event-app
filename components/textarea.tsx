import React, { HTMLProps } from 'react';
import cn from 'classnames';
import {
  inputBoxClassName,
  inputBoxErrorClassName,
  inputBoxPrimaryClassName,
} from './inputBox';

type Props = HTMLProps<HTMLTextAreaElement> & {
  hasError?: boolean;
};

export default function Textarea({ className, hasError, ...props }: Props) {
  return (
    <textarea
      {...props}
      rows={9}
      className={cn(
        inputBoxClassName,
        !hasError ? inputBoxPrimaryClassName : inputBoxErrorClassName,
        'italic resize-none',
        className
      )}
    />
  );
}
