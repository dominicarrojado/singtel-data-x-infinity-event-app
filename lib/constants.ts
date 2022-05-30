import { getAssetUrl } from './assets';
import { Sticker } from './types';

export const SITE_NAME = 'Dominic Arrojado';
export const PROJECT_TITLE = 'Singtel Data X Infinity Event';
export const MAIN_AUTHOR = 'Dominic Arrojado';
export const MAIN_TITLE = `${PROJECT_TITLE} | ${SITE_NAME}`;
export const MAIN_DESC =
  'Singtel Data X Infinity - Infinite possibilities. Infinite data.';
export const MAIN_ORIGIN = 'https://dominicarrojado.com';
export const MAIN_PATH = '/singtel-data-x-infinity-event/';
export const MAIN_URL = `${MAIN_ORIGIN}${MAIN_PATH}`;
export const META_IMAGE = `${MAIN_URL}images/screenshot.png`;
export const META_IMAGE_WIDTH = 2880;
export const META_IMAGE_HEIGHT = 1800;
export const META_IMAGE_ALT =
  'Singtel Data X Infinity - Infinite possibilities. Infinite data.';
export const META_IMAGE_TYPE = 'image/png';

export const NAME_MAX_LENGTH = 256;
export const EMAIL_MAX_LENGTH = 320;
export const MESSAGE_MAX_LENGTH = 150;

export const ENTRIES_PER_PAGE = 9;
export const ENTRY_IMAGE_SIZE = 345;

export const IMAGE_GENERATED_TYPE = 'image/png';
export const IMAGE_DOWNLOAD_TITLE = 'singtel-data-x-infinity-event-pledge';
export const IMAGE_DOWNLOAD_FILE_EXT = IMAGE_GENERATED_TYPE.split('/')[1];

export const FONTS = [
  'Museo500-Regular',
  'Avenir-Regular',
  'MyriadPro-Regular',
];

export const STICKERS: Array<Sticker> = [
  {
    imageUrl: getAssetUrl('images/sticker-1-party-dinosaur.png'),
    imageAlt: 'Secure a #DrugFreeSG sticker',
    previewImageUrl: getAssetUrl(
      'images/sticker-1-party-dinosaur-thumbnail.png'
    ),
  },
  {
    imageUrl: getAssetUrl('images/sticker-2-ring-planet.png'),
    imageAlt: 'Secure a #DrugFreeSG sticker',
    previewImageUrl: getAssetUrl('images/sticker-2-ring-planet-thumbnail.png'),
  },
  {
    imageUrl: getAssetUrl('images/sticker-3-athletic-fox.png'),
    imageAlt: 'Secure a #DrugFreeSG sticker',
    previewImageUrl: getAssetUrl('images/sticker-3-athletic-fox-thumbnail.png'),
  },
  {
    imageUrl: getAssetUrl('images/sticker-4-cute-clam.png'),
    imageAlt: 'Secure a #DrugFreeSG sticker',
    previewImageUrl: getAssetUrl('images/sticker-4-cute-clam-thumbnail.png'),
  },
];
export const STICKERS_LENGTH = STICKERS.length;
