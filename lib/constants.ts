import { getAssetUrl } from './assets';
import { Sticker } from './types';

export const MAIN_ORIGIN = 'https://dominicarrojado.com';
export const MAIN_PATH = '/cnb-anti-drug-abuse-campaign-app/';
export const MAIN_URL = `${MAIN_ORIGIN}${MAIN_PATH}`;
export const MAIN_TITLE = 'CNB Anti-Drug Abuse Campaign 2017';

export const NAME_MAX_LENGTH = 256;
export const EMAIL_MAX_LENGTH = 320;
export const MESSAGE_MAX_LENGTH = 150;

export const STICKERS: Array<Sticker> = [
  {
    imageUrl: getAssetUrl('images/sticker-1-secure-a-drug-free-sg.png'),
    imageAlt: 'Secure a #DrugFreeSG sticker',
    previewImageUrl: null,
  },
  {
    imageUrl: getAssetUrl('images/sticker-2-secure-a-drug-free-sg.png'),
    imageAlt: 'Secure a #DrugFreeSG sticker',
    previewImageUrl: null,
  },
  {
    imageUrl: getAssetUrl('images/sticker-3-secure-a-drug-free-sg.png'),
    imageAlt: 'Secure a #DrugFreeSG sticker',
    previewImageUrl: null,
  },
  {
    imageUrl: getAssetUrl('images/sticker-4-secure-a-drug-free-sg.png'),
    imageAlt: 'Secure a #DrugFreeSG sticker',
    previewImageUrl: null,
  },
  {
    imageUrl: getAssetUrl('images/sticker-5-secure-a-drug-free-sg.png'),
    imageAlt: 'Secure a #DrugFreeSG sticker',
    previewImageUrl: getAssetUrl(
      'images/sticker-5-secure-a-drug-free-sg-thumbnail.png'
    ),
  },
  {
    imageUrl: getAssetUrl('images/sticker-6-secure-a-drug-free-sg.png'),
    imageAlt: 'Secure a #DrugFreeSG sticker',
    previewImageUrl: getAssetUrl(
      'images/sticker-6-secure-a-drug-free-sg-thumbnail.png'
    ),
  },
  {
    imageUrl: getAssetUrl('images/sticker-7-ribbon-secure-a-drug-free-sg.png'),
    imageAlt: 'Secure a #DrugFreeSG ribbon sticker',
    previewImageUrl: getAssetUrl(
      'images/sticker-7-ribbon-secure-a-drug-free-sg-thumbnail.png'
    ),
  },
  {
    imageUrl: getAssetUrl('images/sticker-8-certified-drug-free.png'),
    imageAlt: 'Certified Drug-free sticker',
    previewImageUrl: getAssetUrl(
      'images/sticker-8-certified-drug-free-thumbnail.png'
    ),
  },
];
