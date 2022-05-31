import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLDivElement>;

export default function LoaderBubbles({ className, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn(
        'flex flex-row flex-wrap justify-center items-center gap-[6px] py-[14px]',
        'xs:py-[20px]',
        'sm:py-[30px]',
        className
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
