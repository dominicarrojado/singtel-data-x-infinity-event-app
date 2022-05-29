import cn from 'classnames';
import { useEffect } from 'react';
import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon';
import { NextSeo } from 'next-seo';
import { useGetEntries } from '../../lib/custom-hooks';
import { getRouteCanonical } from '../../lib/route';
import { trackEvent } from '../../lib/google-analytics';
import Button from '../../components/button';
import EntryItem from '../../components/entryItem';
import LoaderBubbles from '../../components/loaderBubbles';
import Alert from '../../components/alert';
import ExternalLink from '../../components/externalLink';
import {
  ErrorMessage,
  ExternalUrl,
  FetchState,
  GoogleAnalyticsEvent,
  Route,
} from '../../lib/types';
import { PROJECT_TITLE } from '../../lib/constants';

export default function Gallery() {
  const [fetchState, entries, hasEntries, getMoreEntries] = useGetEntries();
  const loadMoreOnClick = () => {
    getMoreEntries();

    trackEvent({
      event: GoogleAnalyticsEvent.PLEDGE_LOAD_MORE,
      projectTitle: PROJECT_TITLE,
    });
  };

  useEffect(() => {
    if (!hasEntries) {
      getMoreEntries();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasEntries]);

  return (
    <>
      <NextSeo canonical={getRouteCanonical(Route.GALLERY)} />
      <div className={cn('py-[70px] px-[15px] text-white', 'sm:px-[40px]')}>
        {hasEntries && (
          <>
            <div className="w-full max-w-[480px] mx-auto py-1 px-2 bg-white mb-[20px] text-[14px] text-purple-450 italic">
              <InformationCircleIcon className="inline-block w-4 h-4 -mt-[3px] mr-1" />
              The fake (but realistic) pledges shown below are made possible
              with{' '}
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
            <Button onClick={loadMoreOnClick}>Load more</Button>
          ) : (
            <LoaderBubbles />
          )}
        </div>
      </div>
    </>
  );
}
