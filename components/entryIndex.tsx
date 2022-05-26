import Link from 'next/link';
import React, { useState } from 'react';
import cn from 'classnames';
import ButtonLink from '../components/buttonLink';
import { Entry, Route } from '../lib/types';
import { ENTRY_IMAGE_SIZE } from '../lib/constants';

type Props = {
  selectedEntry: Entry;
};

export default function EntryIndex({ selectedEntry }: Props) {
  const [mainImgLoaded, setMainImgLoaded] = useState(false);
  const [stickerImgLoaded, setStickerImgLoaded] = useState(false);
  const mainImgOnLoad = () => setMainImgLoaded(true);
  const stickerImgOnLoad = () => setStickerImgLoaded(true);
  const isLoading = !mainImgLoaded || !stickerImgLoaded;

  return (
    <div className={cn('py-[70px] px-[15px] text-white', 'sm:px-[40px]')}>
      <div
        className={cn(
          'flex flex-col flex-wrap gap-[30px]',
          'sm:flex-row sm:items-start'
        )}
      >
        <div
          className={cn(
            'relative block w-[345px] h-auto max-w-full mx-auto border-[5px] border-white bg-white select-none aspect-square',
            'sm:border-[15px]'
          )}
        >
          {isLoading && (
            <div
              className={cn(
                'absolute top-0 left-0 w-full h-full bg-[#ddd] bg-shimmer bg-[length:1000px_100%]',
                'animate-shimmer'
              )}
            />
          )}
          <img
            src={selectedEntry.mainImageUrl}
            alt="avatar"
            width={ENTRY_IMAGE_SIZE}
            height={ENTRY_IMAGE_SIZE}
            className="max-w-full h-auto"
            draggable={false}
            onLoad={mainImgOnLoad}
          />
          <img
            src={selectedEntry.stickerImageUrl}
            alt="sticker"
            width={ENTRY_IMAGE_SIZE}
            height={ENTRY_IMAGE_SIZE}
            className="absolute top-0 left-0 w-full h-full"
            draggable={false}
            onLoad={stickerImgOnLoad}
          />
        </div>
        <div
          className={cn(
            'flex flex-col gap-[30px] w-[345px] max-w-full mx-auto'
          )}
        >
          <div>
            <div
              className={cn(
                'inline-block bg-purple-450 p-[16px] text-[22px] tracking-[1px] italic uppercase',
                'sm:p-[20px] sm:text-[25px]'
              )}
            >
              {selectedEntry.name}
            </div>
          </div>
          <div
            className={cn(
              'max-w-full h-auto bg-white p-[16px] text-purple-450 text-[18px] tracking-[1px] italic break-words',
              'sm:min-h-[237px] sm:p-[20px] sm:text-[20px]'
            )}
          >
            {selectedEntry.message}
          </div>
        </div>
      </div>
      <div className="mt-[50px] text-center">
        <Link href={Route.ENTER} passHref>
          <ButtonLink>Make your pledge today!</ButtonLink>
        </Link>
      </div>
    </div>
  );
}
