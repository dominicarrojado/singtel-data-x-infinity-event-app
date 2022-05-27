import { Dispatch, SetStateAction } from 'react';

export enum Route {
  HOME = '/',
  ENTER = '/enter',
  GALLERY = '/gallery',
  GALLERY_VIEW = '/gallery/view',
}

export enum ExternalUrl {
  NCADA_ORG = 'https://www.ncada.org.sg/',
  CNB_GOV = 'https://www.cnb.gov.sg/',
  SP_EDU = 'https://www.sp.edu.sg/',
  CNB_ADAC_FACEBOOK = 'https://www.facebook.com/CNB.DrugFreeSG',
  CNB_ADAC_INSTAGRAM = 'https://www.instagram.com/cnb.drugfreesg/',
  CNB_ADAC_YOUTUBE = 'https://www.youtube.com/user/CNBkNOwDrugs',
  CNB_ADAC_SNAPCHAT = 'https://snapchat.com/add/cnb.drugfreesg',
  SHARER_FACEBOOK = 'https://www.facebook.com/sharer',
  FAKER = 'https://fakerjs.dev/',
}

export enum FetchState {
  DEFAULT = 'default',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum ButtonVariant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
}

export enum ButtonArrowDirection {
  RIGHT = 'right',
  LEFT = 'left',
}

export enum ErrorMessage {
  FORM_INCOMPLETE = 'Oops! There are some fields that are missing. Please input all required fields and try again.',
  UNEXPECTED = 'An unexpected error occurred. Sorry for the inconvenience, please try again.',
}

export enum GoogleAnalyticsEvent {
  PLEDGE_CLICK = 'pledge_click',
  PLEDGE_CREATE = 'pledge_create',
  PLEDGE_RECREATE = 'pledge_recreate',
  PLEDGE_SHARE = 'pledge_share',
  PLEDGE_IMAGE_CROP = 'pledge_image_crop',
  PLEDGE_IMAGE_DOWNLOAD = 'pledge_image_download',
  MODAL_OPEN = 'modal_open',
}

export enum SocialName {
  FACEBOOK = 'facebook',
}

export type StoreContextType = {
  entries: Array<Entry>;
  hasEntries: boolean;
  selectedEntry: Entry | null;
  setEntries: Dispatch<SetStateAction<Array<Entry>>>;
  setHasEntries: Dispatch<SetStateAction<boolean>>;
  setSelectedEntry: Dispatch<SetStateAction<Entry | null>>;
};

export type Sticker = {
  imageUrl: string;
  imageAlt: string;
  previewImageUrl: string | null;
};

export type Entry = {
  imageUrl: string;
  sticker: number;
  name: string;
  email: string;
  message: string;
};
