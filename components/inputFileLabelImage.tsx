import React, { HTMLProps } from 'react';
import cn from 'classnames';
import { Button as ReakitButton } from 'reakit';
import { getAssetUrl } from '../lib/assets';
import { useImageLoaded } from '../lib/custom-hooks';
import LoaderShimmer from './loaderShimmer';

type Props = HTMLProps<HTMLLabelElement> & {
  hasError?: boolean;
};

export default function InputFileLabelImage({
  children,
  className,
  hasError,
  ...props
}: Props) {
  const [imageRef, isImageLoaded] = useImageLoaded();

  return (
    <ReakitButton
      {...props}
      as="label"
      className={cn('group relative inline-block cursor-pointer', className)}
    >
      {!isImageLoaded && <LoaderShimmer />}
      {hasError && (
        <div
          className={cn('absolute inset-0 pointer-events-none', {
            ['ring-4 ring-red-500']: hasError,
          })}
        />
      )}
      <img
        ref={imageRef}
        src={getAssetUrl('images/icon-attach-photo.png')}
        alt="Attach a photo"
        width="328"
        height="328"
        className={cn(
          'max-w-full h-auto aspect-[328/328] select-none',
          'sm:transition-opacity sm:group-hover:opacity-50'
        )}
        draggable={false}
      />
    </ReakitButton>
  );
}
