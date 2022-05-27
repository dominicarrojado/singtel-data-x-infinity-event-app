import React from 'react';
import { downloadImage } from '../lib/download';
import { trackEvent } from '../lib/google-analytics';
import Button from './button';
import EntryIndexImage from './entryIndexImage';
import SectionContainer from './sectionContainer';
import SectionTitle from './sectionTitle';
import ButtonLink from './buttonLink';
import {
  Entry,
  ExternalUrl,
  GoogleAnalyticsEvent,
  SocialName,
} from '../lib/types';
import { MAIN_URL, PROJECT_TITLE } from '../lib/constants';

type Props = {
  entry: Entry;
  resetForm: () => void;
};

const LINK_TEXT_FACEBOOK = 'Share to Facebook';
const BUTTON_TEXT_DOWNLOAD = 'Download image';

export default function EntryDone({ entry, resetForm }: Props) {
  const shareOnClick = () => {
    trackEvent({
      event: GoogleAnalyticsEvent.PLEDGE_SHARE,
      projectTitle: PROJECT_TITLE,
      linkText: LINK_TEXT_FACEBOOK,
      socialName: SocialName.FACEBOOK,
      pledgeSticker: entry.sticker,
    });
  };
  const downloadOnClick = () => {
    downloadImage(entry.imageUrl);

    trackEvent({
      event: GoogleAnalyticsEvent.PLEDGE_IMAGE_DOWNLOAD,
      projectTitle: PROJECT_TITLE,
      pledgeSticker: entry.sticker,
      buttonText: BUTTON_TEXT_DOWNLOAD,
    });
  };
  const resetOnClick = () => {
    resetForm();

    trackEvent({
      event: GoogleAnalyticsEvent.PLEDGE_RECREATE,
      projectTitle: PROJECT_TITLE,
      pledgeSticker: entry.sticker,
    });
  };

  return (
    <>
      <SectionContainer>
        <div className="flex flex-col items-center gap-[25px]">
          <SectionTitle>Thanks for making a pledge!</SectionTitle>
          <EntryIndexImage entry={entry} />
          <div className="max-w-[500px] mx-auto px-[20px] text-center text-[18px] italic">
            Share on Facebook and stand a chance to win up to $100 worth of
            vouchers in a bimonthly draw!
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className="flex flex-col items-center gap-[20px]">
          <ButtonLink
            href={`${ExternalUrl.SHARER_FACEBOOK}?u=${encodeURIComponent(
              MAIN_URL
            )}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={shareOnClick}
          >
            {LINK_TEXT_FACEBOOK}
          </ButtonLink>
          <Button onClick={downloadOnClick}>{BUTTON_TEXT_DOWNLOAD}</Button>
          <Button onClick={resetOnClick}>Make another pledge</Button>
        </div>
      </SectionContainer>
    </>
  );
}
