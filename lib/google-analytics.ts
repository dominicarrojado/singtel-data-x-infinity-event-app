import { checkIsLocalhost } from './location';
import { GoogleAnalyticsEvent, SocialName } from './types';

declare global {
  interface Window {
    dataLayer: Array<Record<string, any>>;
  }
}

type EventPledgeClick = {
  event: GoogleAnalyticsEvent.PLEDGE_CLICK;
  projectTitle: string;
  pledgeSticker: number;
};

type EventPledgeCreate = {
  event: GoogleAnalyticsEvent.PLEDGE_CREATE;
  projectTitle: string;
  pledgeSticker: number;
};

type EventPledgeRereate = {
  event: GoogleAnalyticsEvent.PLEDGE_RECREATE;
  projectTitle: string;
  pledgeSticker: number;
};

type EventPledgeShare = {
  event: GoogleAnalyticsEvent.PLEDGE_SHARE;
  projectTitle: string;
  socialName: SocialName;
  linkText: string;
  pledgeSticker: number;
};

type EventPledgeImageCrop = {
  event: GoogleAnalyticsEvent.PLEDGE_IMAGE_CROP;
  projectTitle: string;
};

type EventPledgeImageDownload = {
  event: GoogleAnalyticsEvent.PLEDGE_IMAGE_DOWNLOAD;
  projectTitle: string;
  buttonText: string;
  pledgeSticker: number;
};

type EventModalOpen = {
  event: GoogleAnalyticsEvent.MODAL_OPEN;
  projectTitle: string;
  buttonText: string;
};

export function trackEvent(
  data:
    | EventPledgeClick
    | EventPledgeCreate
    | EventPledgeRereate
    | EventPledgeShare
    | EventPledgeImageCrop
    | EventPledgeImageDownload
    | EventModalOpen
) {
  if (checkIsLocalhost()) {
    return;
  }

  window.dataLayer = Array.isArray(window.dataLayer) ? window.dataLayer : [];
  window.dataLayer.push(data);
}
