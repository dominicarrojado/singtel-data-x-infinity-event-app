import cn from 'classnames';

export default function Home() {
  return (
    <>
      <div className={cn('flex py-[42px] px-[15px]', 'sm:px-[40px]')}>
        <div
          className={cn(
            'relative w-full py-[60px] px-[10px] border-[7px] border-white shadow-[2px_2px_2px_rgba(68,68,68,1)]',
            'sm:border-[10px]'
          )}
        >
          <div className="absolute inset-0 shadow-[inset_2px_2px_rgba(68,68,68,1)]" />
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
      </div>
    </>
  );
}
