import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Layout from '../components/layout';
import { Entry } from '../lib/types';
import { StoreContext } from '../lib/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [entries, setEntries] = useState<Array<Entry>>([]);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  const storeValue = { entries, selectedEntry, setEntries, setSelectedEntry };

  return (
    <StoreContext.Provider value={storeValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreContext.Provider>
  );
}
