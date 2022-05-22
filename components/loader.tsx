import React from 'react';
import cn from 'classnames';

export default function Loader() {
  return (
    <div
      className={cn(
        'flex flex-row flex-wrap justify-center items-center gap-[6px] py-[16px]',
        'sm:py-[25px]'
      )}
    >
      {[0, 1, 2].map((idx) => (
        <div
          key={idx}
          className="w-[14px] h-[14px] rounded-full bg-white animate-expand"
          style={{
            animationDelay: `${idx * 160}ms`,
          }}
        />
      ))}
    </div>
  );
}
