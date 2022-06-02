import Link from 'next/link';
import cn from 'classnames';
import ButtonLink from '../components/buttonLink';
import HeroBanner from '../components/heroBanner';
import { getAssetUrl } from '../lib/assets';
import { Route } from '../lib/types';

export default function Home() {
  return (
    <>
      <div className={cn('px-[20px]', 'sm:px-[40px]')}>
        <HeroBanner />
        <div
          className={cn(
            'text-[22px] leading-7',
            'xs:text-[25px] xs:leading-8',
            'sm:text-[30px] sm:leading-9'
          )}
        >
          You asked. We listened. <br className={cn('hidden', 'xs:block')} />
          Introducing DATA X INFINITY.
        </div>
        <div
          className={cn(
            'mt-2 font-avenir text-[16px]',
            'xs:text-[17px]',
            'sm:text-[20px]'
          )}
        >
          Get unlimited data for a flat flee of $39.90/mth!{' '}
          <br className={cn('hidden', 'xs:block')} />
          Let us know what you would do with all that data!
        </div>
        <div className={cn('mt-[30px]', 'xs:mt-[35px]', 'sm:mt-[50px]')}>
          <Link href={Route.ENTER} passHref>
            <ButtonLink
              className={cn(
                'max-w-[265px]',
                'xs:max-w-[305px]',
                'sm:max-w-[445px]'
              )}
              withArrow
            >
              Tell us how you would use your unlimited data.
            </ButtonLink>
          </Link>
        </div>
      </div>
      <div
        className={cn(
          'flex justify-end mt-auto pt-[40px]',
          'sm:-mt-28 sm:pt-0'
        )}
      >
        <img
          src={getAssetUrl('images/illus-coconut-trees.png')}
          alt="coconut trees"
          width="657"
          height="914"
          className={cn('w-[80%] aspect-[657/914]', 'xs:w-[70%]', 'xs:w-[60%]')}
        />
      </div>
    </>
  );
}
