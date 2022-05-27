import React from 'react';
import cn from 'classnames';
import { Entry } from '../lib/types';
import { ENTRY_IMAGE_SIZE } from '../lib/constants';

type Props = {
  entry: Entry;
};

export default function EntryIndexImage({ entry }: Props) {
  return (
    <div
      className={cn(
        'relative block w-[345px] h-auto max-w-full mx-auto border-[5px] border-white bg-white select-none aspect-square',
        'sm:border-[15px]'
      )}
    >
      <img
        src={entry.imageUrl}
        alt={`${entry.name} pledge`}
        width={ENTRY_IMAGE_SIZE}
        height={ENTRY_IMAGE_SIZE}
        className="max-w-full h-auto"
        draggable={false}
      />
    </div>
  );
}
