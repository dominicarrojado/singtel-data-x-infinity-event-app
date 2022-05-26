import cn from 'classnames';
import React, { useState } from 'react';
import { Button as ReakitButton } from 'reakit';
import { getFileDataUrl } from '../lib/file';
import Textarea from '../components/textarea';
import InputLabel from '../components/inputLabel';
import InputBox from '../components/inputBox';
import SectionContainer from '../components/sectionContainer';
import SectionDivider from '../components/sectionDivider';
import SectionTitle from '../components/sectionTitle';
import InputContainer from '../components/inputContainer';
import Button from '../components/button';
import ImageWithSticker from '../components/imageWithSticker';
import InputFileLabelImage from '../components/inputFileLabelImage';
import InputFileLabelText from '../components/inputFileLabelText';
import {
  EMAIL_MAX_LENGTH,
  MESSAGE_MAX_LENGTH,
  NAME_MAX_LENGTH,
  STICKERS,
} from '../lib/constants';

export default function Enter() {
  const [stickerIdx, setStickerIdx] = useState(-1);
  const selectedSticker = STICKERS[stickerIdx];
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const fileOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files === null) {
      return;
    }

    const dataUrl = await getFileDataUrl(files[0]);

    setImageDataUrl(dataUrl);

    // reset input file
    e.target.value = '';
  };
  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={cn('py-[50px] px-[15px] text-white', 'sm:px-[40px]')}>
      <SectionContainer>
        <SectionTitle prefix="Step 1">Upload your image</SectionTitle>
        <div
          className={cn(
            'flex flex-col gap-[30px] mt-[25px]',
            'sm:flex-row sm:items-stretch sm:justify-center sm:flex-wrap'
          )}
        >
          <div
            className={cn(
              'text-center',
              'sm:flex sm:justify-center sm:w-[328]',
              !imageDataUrl
                ? 'sm:bg-purple-450 sm:items-center'
                : 'sm:items-start'
            )}
          >
            <div className="inline-flex">
              {!imageDataUrl ? (
                <InputFileLabelImage htmlFor="image-upload" />
              ) : (
                <>
                  <div className="flex flex-col relative">
                    <ImageWithSticker
                      mainImageUrl={imageDataUrl}
                      sticker={selectedSticker}
                    />
                    <InputFileLabelText htmlFor="image-upload">
                      Change photo
                    </InputFileLabelText>
                  </div>
                </>
              )}
              <input
                id="image-upload"
                name="image-upload"
                type="file"
                accept="image/jpeg, image/png"
                className="sr-only"
                onChange={fileOnChange}
              />
            </div>
          </div>
          <div className="sm:w-[360px]">
            <InputLabel htmlFor="message">
              Tell us why a drug-free Singapore is important:
            </InputLabel>
            <div className="mt-[15px]">
              <label className="block text-[15px] mb-[8px]">
                150/{MESSAGE_MAX_LENGTH} characters
              </label>
              <Textarea
                id="message"
                placeholder="Type here..."
                maxLength={MESSAGE_MAX_LENGTH}
              />
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionDivider />
      <SectionContainer>
        <SectionTitle prefix="Step 2">Select a sticker or a badge</SectionTitle>
        <ul className="flex flex-wrap justify-center gap-[40px] mt-[25px]">
          {STICKERS.map((sticker, idx) => (
            <ReakitButton
              key={idx}
              className={cn(
                'w-[132px] h-[132px] bg-white',
                'transition-all',
                idx !== stickerIdx
                  ? 'hover:scale-110 focus:scale-110'
                  : 'ring-[5px] ring-black'
              )}
              onClick={() => setStickerIdx(idx)}
            >
              <img
                src={sticker.previewImageUrl || sticker.imageUrl}
                alt={sticker.imageAlt}
                width="345"
                height="345"
                className="w-full h-auto aspect-[345/345]"
                draggable={false}
              />
            </ReakitButton>
          ))}
        </ul>
      </SectionContainer>
      <SectionDivider />
      <SectionContainer>
        <SectionTitle>Provide contact details</SectionTitle>
        <form
          className="flex flex-col flex-initial gap-[45px] mt-[25px]"
          onSubmit={formOnSubmit}
        >
          <div className={cn('flex flex-col gap-[30px]', 'sm:flex-row')}>
            <InputContainer>
              <InputLabel
                htmlFor="user-name"
                autoComplete="name"
                maxLength={NAME_MAX_LENGTH}
              >
                Name
              </InputLabel>
              <InputBox id="user-name" type="text" />
            </InputContainer>
            <InputContainer>
              <InputLabel
                htmlFor="user-email"
                autoComplete="email"
                maxLength={EMAIL_MAX_LENGTH}
              >
                Email Address
              </InputLabel>
              <InputBox id="user-email" type="email" />
            </InputContainer>
          </div>
          <div className="text-center">
            <Button type="submit" className="sm:min-w-[220px]">
              Submit
            </Button>
          </div>
        </form>
      </SectionContainer>
    </div>
  );
}
