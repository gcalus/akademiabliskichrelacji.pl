import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  image: string;
};

const Background = (props: IBackgroundProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className="relative bg-cover bg-no-repeat bg-center bg-fixed"
    >
      <div className={`absolute h-full w-full ${props.color}`} />
      <div className={'relative text-gray-100'}> {props.children}</div>
    </div>
  );
};

export { Background };
