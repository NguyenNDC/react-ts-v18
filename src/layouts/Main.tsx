import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Main({ children }: Props) {
  return <div className="main">{children}</div>;
}
