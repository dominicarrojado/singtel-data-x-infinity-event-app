import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Route } from '../../lib/types';
import { StoreContext } from '../../lib/store';
import EntryIndex from '../../components/entryIndex';

export default function ViewPage() {
  const router = useRouter();
  const { selectedEntry } = useContext(StoreContext);

  useEffect(() => {
    if (!selectedEntry) {
      router.replace(Route.GALLERY);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEntry]);

  return selectedEntry ? <EntryIndex selectedEntry={selectedEntry} /> : null;
}
