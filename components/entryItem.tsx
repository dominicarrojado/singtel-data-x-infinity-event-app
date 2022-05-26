import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import cn from 'classnames';
import { Button as ReakitButton } from 'reakit/Button';
import { Entry, Route } from '../lib/types';
import { StoreContext } from '../lib/store';

type Props = {
  entry: Entry;
};

export default function EntryItem({ entry }: Props) {
  const context = useContext(StoreContext);
  const router = useRouter();
  const [mainImgLoaded, setMainImgLoaded] = useState(false);
  const [stickerImgLoaded, setStickerImgLoaded] = useState(false);
  const mainImgOnLoad = () => setMainImgLoaded(true);
  const stickerImgOnLoad = () => setStickerImgLoaded(true);
  const isLoading = !mainImgLoaded || !stickerImgLoaded;
  const entryOnClick = async () => {
    await context.setSelectedEntry(entry);
    router.push(Route.GALLERY_VIEW);
  };

  return (
    <ReakitButton
      as="li"
      className={cn(
        'group relative inline-block border-[5px] border-white bg-white select-none cursor-pointer',
        'sm:w-[220px] sm:h-[220px]'
      )}
      onClick={entryOnClick}
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
        src={entry.mainImageUrl}
        alt={`${entry.name} avatar`}
        width="345"
        height="345"
        className={cn(
          'w-[245px] max-w-full h-auto aspect-square',
          'transition-opacity group-hover:opacity-80 group-focus:opacity-80'
        )}
        onLoad={mainImgOnLoad}
      />
      <img
        src={entry.stickerImageUrl}
        alt={`${entry.name} sticker`}
        width="345"
        height="345"
        className="absolute top-0 left-0 w-full h-full aspect-square"
        onLoad={stickerImgOnLoad}
      />
    </ReakitButton>
  );
}
