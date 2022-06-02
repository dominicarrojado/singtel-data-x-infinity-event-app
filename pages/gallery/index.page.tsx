import cn from 'classnames';
import { useEffect, useMemo } from 'react';
import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon';
import { NextSeo } from 'next-seo';
import { useGetEntries } from '../../lib/custom-hooks';
import { getRouteCanonical } from '../../lib/route';
import { trackEvent } from '../../lib/google-analytics';
import HeroBanner from '../../components/heroBanner';
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
  const metaUrl = useMemo(() => getRouteCanonical(Route.GALLERY), []);
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
      <NextSeo canonical={metaUrl} openGraph={{ url: metaUrl }} />
      <div className={cn('pb-[40px] px-[20px]', 'sm:px-[40px]')}>
        <HeroBanner />
        {hasEntries && (
          <>
            <div
              className={cn(
                'w-full mb-[20px] font-avenir text-[14px]',
                'xs:text-[15px]',
                'sm:text-[16px]'
              )}
            >
              <InformationCircleIcon className="inline-block w-4 h-4 -mt-[4px] mr-1" />
              The fake (but realistic) submissions shown below are made possible
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
