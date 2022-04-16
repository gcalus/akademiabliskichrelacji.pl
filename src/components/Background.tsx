import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={
      "relative bg-cover bg-no-repeat bg-center bg-fixed bg-[url('/assets/images/hero-background2.png')]"
    }
  >
    <div className={`absolute h-full w-full ${props.color}`} />
    <div className={'relative text-gray-100'}> {props.children}</div>
  </div>
);

export { Background };
