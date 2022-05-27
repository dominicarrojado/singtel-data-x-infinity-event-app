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

export type Sticker = {
  imageUrl: string;
  imageAlt: string;
  previewImageUrl: string | null;
};

export type Entry = {
  mainImageUrl: string;
  stickerImageUrl: string;
  name: string;
  message: string;
};
