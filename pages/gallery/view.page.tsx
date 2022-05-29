import { useRouter } from 'next/router';
import { useContext, useEffect, useMemo } from 'react';
import { NextSeo } from 'next-seo';
import { getRouteCanonical } from '../../lib/route';
import EntryIndex from '../../components/entryIndex';
import { Route } from '../../lib/types';
import { StoreContext } from '../../lib/store';

export default function GalleryView() {
  const metaUrl = useMemo(() => getRouteCanonical(Route.GALLERY_VIEW), []);
  const router = useRouter();
  const { selectedEntry } = useContext(StoreContext);

  useEffect(() => {
    if (!selectedEntry) {
      router.replace(Route.GALLERY);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEntry]);

  return (
    <>
      <NextSeo canonical={metaUrl} openGraph={{ url: metaUrl }} />
      {selectedEntry ? <EntryIndex selectedEntry={selectedEntry} /> : null}
    </>
  );
}
