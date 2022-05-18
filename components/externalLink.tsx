import React, { HTMLProps } from 'react';
import { ExternalUrl } from '../lib/types';

export type Props = HTMLProps<HTMLAnchorElement> & {
  href: ExternalUrl;
};

export default function ExternalLink({ children, ...props }: Props) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer nofollow">
      {children}
    </a>
  );
}
