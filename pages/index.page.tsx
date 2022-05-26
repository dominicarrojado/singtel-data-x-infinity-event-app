import cn from 'classnames';
import Link from 'next/link';
import ButtonArrow from '../components/buttonArrow';
import ButtonLink from '../components/buttonLink';
import { Route } from '../lib/types';

export default function Home() {
  return (
    <div className={cn('pt-[40px] pb-[70px] px-[15px]', 'sm:px-[40px]')}>
      <div
        className={cn(
          'relative py-[60px] px-[10px] border-[5px] border-white shadow-[2px_2px_2px_rgba(68,68,68,1)]',
          'sm:border-[10px]'
        )}
      >
        <div className="absolute inset-0 shadow-[inset_2px_2px_rgba(68,68,68,1)] pointer-events-none" />
        <h1
          className={cn(
            'text-center text-white text-[30px] leading-[40px] font-medium italic uppercase text-shadow',
            'xs:text-[37px] xs:leading-[50px]',
            'sm:text-[50px] sm:leading-[65px]',
            'md:text-[72px] md:leading-[90px]'
          )}
        >
          <span className="block">Secure a</span>
          <span className="block text-[120%] font-black">#DrugFreeSG</span>
        </h1>
      </div>
      <div className="max-w-[460px] mt-[40px] mx-auto text-white text-center italic">
        <h2 className="text-[22px] tracking-[1px] font-black uppercase">
          Make a pledge!
        </h2>
        <ol className="flex flex-col gap-4 mt-[20px] text-[18px]">
          <li>
            1. Upload your photo and tell us why a drug-free environment is
            important for Singapore.
          </li>
          <li>2. Select a sticker for your photo.</li>
          <li>
            3. Share on Facebook and stand a chance to win up to $100 worth of
            vouchers in a bimonthly draw!
          </li>
        </ol>
        <div className="mt-[40px]">
          <Link href={Route.ENTER} passHref>
            <ButtonLink>
              <ButtonArrow direction="left" />
              <ButtonArrow direction="right" />
              Make your pledge today!
            </ButtonLink>
          </Link>
        </div>
      </div>
    </div>
  );
}
