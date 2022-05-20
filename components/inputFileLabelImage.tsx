import React, { HTMLProps } from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';

type Props = HTMLProps<HTMLLabelElement>;

export default function InputFileLabelImage({
  children,
  className,
  ...props
}: Props) {
  return (
    <label
      {...props}
      className={cn(
        'inline-block cursor-pointer',
        'sm:transition-opacity sm:hover:opacity-50',
        className
      )}
    >
      <img
        src={getAssetUrl('images/icon-attach-photo.png')}
        alt="Attach a photo"
        width="328"
        height="328"
        className="max-w-full h-auto aspect-[328/328] select-none"
        draggable={false}
      />
    </label>
  );
}
