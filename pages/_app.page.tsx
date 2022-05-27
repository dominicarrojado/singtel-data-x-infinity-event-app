import '../styles/globals.css';
import 'cropperjs/dist/cropper.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useState } from 'react';
import SeoTags from '../components/seoTags';
import Layout from '../components/layout';
import { Entry } from '../lib/types';
import { StoreContext } from '../lib/store';
import TagManager from '../components/tagManager';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [entries, setEntries] = useState<Array<Entry>>([]);
  const [hasEntries, setHasEntries] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);

  return (
    <StoreContext.Provider
      value={{
        entries,
        hasEntries,
        selectedEntry,
        setEntries,
        setHasEntries,
        setSelectedEntry,
      }}
    >
      <SeoTags />
      <TagManager />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreContext.Provider>
  );
}
