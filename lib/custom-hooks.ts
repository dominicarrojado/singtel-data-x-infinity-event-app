import { useContext, useEffect, useRef, useState } from 'react';
import { getFakerJs } from './imports';
import { getRandomStickerImageUrl } from './stickers';
import { getRefValue } from './hooks';
import { createImageWithSticker } from './canvas';
import { Entry, FetchState } from './types';
import { StoreContext } from './store';
import { ENTRIES_PER_PAGE, ENTRY_IMAGE_SIZE } from './constants';

export function useImageLoaded() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const imageEl = getRefValue(imageRef);
    const imageOnLoad = () => setIsImageLoaded(true);

    if (imageEl.complete) {
      imageOnLoad();
    } else {
      imageEl.addEventListener('load', imageOnLoad);
    }

    return () => {
      imageEl.removeEventListener('load', imageOnLoad);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [imageRef, isImageLoaded] as const;
}

export function useGetEntries() {
  const context = useContext(StoreContext);
  const { entries } = context;
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const getMoreEntries = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const faker = await getFakerJs();
      const promises: Array<Promise<Entry>> = [];
      const extraEntriesCount = entries.length % ENTRIES_PER_PAGE;
      const newEntriesCount = ENTRIES_PER_PAGE - extraEntriesCount; // to keep gallery grid 9x9

      for (let i = 0; i < newEntriesCount; i++) {
        promises.push(
          (async () => {
            const mainImageUrl = faker.image.imageUrl(
              ENTRY_IMAGE_SIZE,
              ENTRY_IMAGE_SIZE,
              'people',
              true,
              true
            );
            const [stickerIdx, stickerImageUrl] = getRandomStickerImageUrl();

            return {
              sticker: stickerIdx + 1,
              imageUrl: await createImageWithSticker(
                mainImageUrl,
                stickerImageUrl
              ),
              name: faker.name.findName(),
              email: faker.internet.email(),
              message: faker.lorem.sentence(),
            };
          })()
        );
      }

      const newEntries = await Promise.all(promises);

      context.setEntries((currentEntries) => [
        ...currentEntries,
        ...newEntries,
      ]);
      context.setHasEntries(true);

      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      console.error(err);
      setFetchState(FetchState.ERROR);
    }
  };

  return [
    fetchState,
    context.entries,
    context.hasEntries,
    getMoreEntries,
  ] as const;
}
