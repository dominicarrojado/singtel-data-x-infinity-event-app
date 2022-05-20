import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function SectionContainer({ children }: Props) {
  return <div className="py-[20px]">{children}</div>;
}
