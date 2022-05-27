import cn from 'classnames';
import { useEffect } from 'react';
import { useGetEntries } from '../../lib/custom-hooks';
import Button from '../../components/button';
import EntryItem from '../../components/entryItem';
import Loader from '../../components/loader';
import UnexpectedError from '../../components/unexpectedError';
import { FetchState } from '../../lib/types';

export default function Gallery() {
  const [fetchState, entries, getMoreEntries] = useGetEntries();

  useEffect(() => {
    if (entries.length === 0) {
      getMoreEntries();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries]);

  return (
    <div className={cn('py-[70px] px-[15px] text-white', 'sm:px-[40px]')}>
      <ul className="flex flex-row flex-wrap justify-center gap-[20px]">
        {entries.map((entry, idx) => (
          <EntryItem key={idx} entry={entry} />
        ))}
      </ul>
      <div className="mt-[40px] text-center">
        {fetchState === FetchState.ERROR && (
          <UnexpectedError className={cn('py-[10px]', 'sm:py-[19px]')} />
        )}
        {fetchState !== FetchState.LOADING ? (
          <Button onClick={getMoreEntries}>Load more</Button>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
