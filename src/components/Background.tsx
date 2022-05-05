import { ReactNode } from 'react';

type IBackgroundProps = {
  backgroundHeightSpacing?: { h: string; top: string };
  backdrop?: string;
  backgroundImage: JSX.Element;
  children: ReactNode;
};

const Background = ({
  backgroundHeightSpacing = { h: 'h-hero', top: 'top-hero' },
  backdrop = 'bg-gray-700/50',
  backgroundImage,
  children,
}: IBackgroundProps) => {
  return (
    <div className={`relative ${backgroundHeightSpacing.h}`}>
      <div className={`sticky h-0 top-0 -z-10`}>
        <div className={`relative ${backgroundHeightSpacing.h}`}>
          {backgroundImage}
        </div>
      </div>
      <div
        className={`absolute top-0 ${backgroundHeightSpacing.h} w-full ${backdrop} text-gray-100`}
      >
        {children}
      </div>
      <div
        className={`absolute ${backgroundHeightSpacing.top} ${backgroundHeightSpacing.h} w-full bg-white -z-10`}
      />
    </div>
  );
};

export { Background };
