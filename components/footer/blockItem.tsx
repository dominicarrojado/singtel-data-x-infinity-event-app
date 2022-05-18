import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function BlockItem({ children }: Props) {
  return (
    <div className="flex flex-col gap-4 py-[5px] px-[10px] text-left">
      {children}
    </div>
  );
}
