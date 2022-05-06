import { ReactNode } from 'react';

import className from 'classnames';
import Image from 'next/image';

import imageDefault from '../../public/assets/images/kurs2.png';

type IFeaturesWithImageRowProps = {
  title?: string;
  description?: string;
  image: StaticImageData;
  reverse?: boolean;
  children?: ReactNode;
  features: string[];
  narrowImage?: boolean;
};

const FeaturesWithImageRow = ({
  title,
  description,
  image = imageDefault,
  reverse,
  children,
  features,
  narrowImage,
}: IFeaturesWithImageRowProps) => {
  const verticalFeatureClass = className('flex', 'flex-wrap', 'items-center', {
    'flex-row-reverse': reverse,
  });

  const class2 = className('w-full', 'sm:px-6', {
    'md:w-2/3': narrowImage,
    'md:w-1/2': !narrowImage,
  });

  const class3 = className(
    'w-full',
    'p-6',
    'mx-auto',
    'w-full',
    'max-w-[400px]',
    {
      'md:w-1/3': narrowImage,
      'md:w-1/2': !narrowImage,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className={class2}>
        <h3 className="text-3xl text-gray-900 font-semibold">{title}</h3>
        <div className="mt-6 text-xl leading-9">{description}</div>
        <ul className="mt-6 text-xl leading-9 list-none">
          {features.map((f) => (
            <li key={f} className="mb-2">
              – {f}
            </li>
          ))}
        </ul>
        {children}
      </div>

      <div className={class3}>
        <Image src={image} alt="" className="rounded-2xl" placeholder="blur" />
      </div>
    </div>
  );
};

export { FeaturesWithImageRow };
