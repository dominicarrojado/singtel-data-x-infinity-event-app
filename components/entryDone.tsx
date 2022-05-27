import React from 'react';
import { downloadImage } from '../lib/download';
import Button from './button';
import EntryIndexImage from './entryIndexImage';
import SectionContainer from './sectionContainer';
import SectionTitle from './sectionTitle';
import ButtonLink from './buttonLink';
import { Entry, ExternalUrl } from '../lib/types';
import { MAIN_URL } from '../lib/constants';

type Props = {
  entry: Entry;
  resetForm: () => void;
};

export default function EntryDone({ entry, resetForm }: Props) {
  const downloadOnClick = () => downloadImage(entry.imageUrl);

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
            title="Share to Facebook"
          >
            Share to Facebook
          </ButtonLink>
          <Button onClick={downloadOnClick}>Download image</Button>
          <Button onClick={resetForm}>Make another pledge</Button>
        </div>
      </SectionContainer>
    </>
  );
}
