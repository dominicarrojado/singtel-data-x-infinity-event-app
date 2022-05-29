import cn from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import { NextSeo } from 'next-seo';
import { getRouteCanonical } from '../lib/route';
import EntryForm from '../components/entryForm';
import EntryDone from '../components/entryDone';
import { Entry, Route } from '../lib/types';
import { MESSAGE_MAX_LENGTH, STICKERS } from '../lib/constants';

export default function Enter() {
  const metaUrl = useMemo(() => getRouteCanonical(Route.ENTER), []);
  const [mainImageUrl, setMainImageUrl] = useState('');
  const [message, setMessage] = useState('');
  const [stickerIdx, setStickerIdx] = useState(-1);
  const selectedSticker = STICKERS[stickerIdx];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [remainingCharCount, setRemainingCharCount] =
    useState(MESSAGE_MAX_LENGTH);
  const [createdEntry, setCreatedEntry] = useState<Entry | null>(null);
  const resetForm = () => {
    setMainImageUrl('');
    setMessage('');
    setStickerIdx(-1);
    setName('');
    setEmail('');
    setRemainingCharCount(MESSAGE_MAX_LENGTH);
    setCreatedEntry(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [createdEntry]);

  return (
    <>
      <NextSeo canonical={metaUrl} openGraph={{ url: metaUrl }} />
      <div className={cn('py-[50px] px-[15px] text-white', 'sm:px-[40px]')}>
        {!createdEntry ? (
          <EntryForm
            mainImageUrl={mainImageUrl}
            message={message}
            remainingCharCount={remainingCharCount}
            stickerIdx={stickerIdx}
            selectedSticker={selectedSticker}
            name={name}
            email={email}
            setMainImageUrl={setMainImageUrl}
            setMessage={setMessage}
            setRemainingCharCount={setRemainingCharCount}
            setStickerIdx={setStickerIdx}
            setName={setName}
            setEmail={setEmail}
            setCreatedEntry={setCreatedEntry}
          />
        ) : (
          <EntryDone entry={createdEntry} resetForm={resetForm} />
        )}
      </div>
    </>
  );
}
