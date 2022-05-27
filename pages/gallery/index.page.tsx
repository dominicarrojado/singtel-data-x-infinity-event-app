import cn from 'classnames';
import { useEffect } from 'react';
import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon';
import { useGetEntries } from '../../lib/custom-hooks';
import Button from '../../components/button';
import EntryItem from '../../components/entryItem';
import LoaderBubbles from '../../components/loaderBubbles';
import Alert from '../../components/alert';
import { ErrorMessage, ExternalUrl, FetchState } from '../../lib/types';
import ExternalLink from '../../components/externalLink';

export default function Gallery() {
  const [fetchState, entries, hasEntries, getMoreEntries] = useGetEntries();

  useEffect(() => {
    if (!hasEntries) {
      getMoreEntries();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasEntries]);

  return (
    <div className={cn('py-[70px] px-[15px] text-white', 'sm:px-[40px]')}>
      {hasEntries && (
        <>
          <div className="mb-[20px] italic">
            <InformationCircleIcon className="inline-block w-5 h-5 -mt-1 mr-2 flex-shrink-0" />
            The fake (but realistic) pledges shown below are made possible with{' '}
            <ExternalLink href={ExternalUrl.FAKER} className="underline">
              Faker
            </ExternalLink>
            .
          </div>
          <ul className="flex flex-row flex-wrap justify-center gap-[20px]">
            {entries.map((entry, idx) => (
              <EntryItem key={idx} entry={entry} />
            ))}
          </ul>
        </>
      )}
      <div className="mt-[40px] text-center">
        {fetchState === FetchState.ERROR && (
          <Alert className={cn('py-[10px]', 'sm:py-[19px]')}>
            {ErrorMessage.UNEXPECTED}
          </Alert>
        )}
        {hasEntries && fetchState !== FetchState.LOADING ? (
          <Button onClick={getMoreEntries}>Load more</Button>
        ) : (
          <LoaderBubbles />
        )}
      </div>
    </div>
  );
}
