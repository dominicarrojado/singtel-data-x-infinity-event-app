import { STICKERS, STICKERS_LENGTH } from './constants';

export function getRandomStickerImageUrl() {
  const randomIdx = Math.floor(Math.random() * STICKERS_LENGTH);

  return [randomIdx, STICKERS[randomIdx].imageUrl] as const;
}
