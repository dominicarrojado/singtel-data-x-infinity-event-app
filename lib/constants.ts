import { getAssetUrl } from './assets';
import { Sticker } from './types';

export const SITE_NAME = 'Dominic Arrojado';
export const PROJECT_TITLE = 'Singtel Data X Infinity Event Singapore';
export const MAIN_AUTHOR = 'Dominic Arrojado';
export const MAIN_TITLE = `${PROJECT_TITLE} | ${SITE_NAME}`;
export const MAIN_DESC =
  'Infinite possibilities. Infinite data. Singtel introduces Data X Infinity. Get unlimited data for a flat flee of $39.90/mth! Submit an entry and let us know what you would do with all that data!';
export const MAIN_ORIGIN = 'https://dominicarrojado.com';
export const MAIN_PATH = '/singtel-data-x-infinity-event-app/';
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
export const ENTRY_IMAGE_SIZE = 481;

export const IMAGE_GENERATED_TYPE = 'image/png';
export const IMAGE_DOWNLOAD_TITLE = 'singtel-data-x-infinity-event-pledge';
export const IMAGE_DOWNLOAD_FILE_EXT = IMAGE_GENERATED_TYPE.split('/')[1];
export const IMAGE_CROP_TIMEOUT = 1000;

export const FONTS = [
  'Museo500-Regular',
  'Avenir-Regular',
  'MyriadPro-Regular',
];

export const STICKERS: Array<Sticker> = [
  {
    imageUrl: getAssetUrl('images/sticker-1-party-dinosaur.png'),
    imageAlt: 'party dinosaur sticker',
    previewImageUrl: getAssetUrl(
      'images/sticker-1-party-dinosaur-thumbnail.png'
    ),
    previewImageWidth: 226,
    previewImageHeight: 165,
    previewImageClassName: 'w-[226/165]',
  },
  {
    imageUrl: getAssetUrl('images/sticker-2-ring-planet.png'),
    imageAlt: 'ring planet sticker',
    previewImageUrl: getAssetUrl('images/sticker-2-ring-planet-thumbnail.png'),
    previewImageWidth: 231,
    previewImageHeight: 165,
    previewImageClassName: 'w-[231/165]',
  },
  {
    imageUrl: getAssetUrl('images/sticker-3-athletic-fox.png'),
    imageAlt: 'athletic fox sticker',
    previewImageUrl: getAssetUrl('images/sticker-3-athletic-fox-thumbnail.png'),
    previewImageWidth: 158,
    previewImageHeight: 220,
    previewImageClassName: 'w-[158/220]',
  },
  {
    imageUrl: getAssetUrl('images/sticker-4-cute-clam.png'),
    imageAlt: 'cute clam sticker',
    previewImageUrl: getAssetUrl('images/sticker-4-cute-clam-thumbnail.png'),
    previewImageWidth: 182,
    previewImageHeight: 150,
    previewImageClassName: 'w-[182/150]',
  },
];
export const STICKERS_LENGTH = STICKERS.length;
