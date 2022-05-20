import React from 'react';
import { Sticker } from '../lib/types';

type Props = {
  mainImageUrl: string;
  sticker?: Sticker;
};

export default function ImageWithSticker({ mainImageUrl, sticker }: Props) {
  return (
    <div className="relative inline-block bg-white select-none">
      <img
        src={mainImageUrl}
        alt="Attached photo"
        width="328"
        height="328"
        className="max-w-full h-auto"
        draggable={false}
      />
      {sticker && (
        <img
          src={sticker.imageUrl}
          alt={sticker.imageAlt}
          width="345"
          height="345"
          className="absolute top-0 left-0 w-full h-full"
          draggable={false}
        />
      )}
    </div>
  );
}
