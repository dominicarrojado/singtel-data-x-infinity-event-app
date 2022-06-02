import cn from 'classnames';
import React from 'react';
import { Button as ReakitButton, ButtonHTMLProps } from 'reakit';
import { useImageLoaded } from '../lib/custom-hooks';
import LoaderShimmer from './loaderShimmer';
import { Sticker } from '../lib/types';

type Props = Omit<ButtonHTMLProps, 'children'> & {
  sticker: Sticker;
  isActive: boolean;
};

export default function StickerItem({
  sticker,
  className,
  isActive,
  ...props
}: Props) {
  const [imageRef, isImageLoaded] = useImageLoaded();

  return (
    <ReakitButton
      {...props}
      as="li"
      className={cn(
        'relative inline-flex items-center justify-center flex-shrink-0 w-full p-[20px]',
        'transition-all',
        'xs:w-[50%] xs:p-[15px]',
        'sm:w-[25%] xs:p-[10px]',
        !isActive
          ? 'hover:scale-110 focus:scale-110'
          : 'drop-shadow-[0_0_5px_rgba(0,0,0,1)]',
        className
      )}
    >
      {!isImageLoaded && <LoaderShimmer />}
      <img
        ref={imageRef}
        src={sticker.previewImageUrl}
        alt={sticker.imageAlt}
        width={sticker.previewImageWidth}
        height={sticker.previewImageHeight}
        className={cn(
          'max-w-full max-h-full w-auto h-auto',
          sticker.previewImageClassName
        )}
        draggable={false}
      />
    </ReakitButton>
  );
}
