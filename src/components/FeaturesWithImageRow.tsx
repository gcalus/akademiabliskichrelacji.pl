import { ReactNode } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IFeaturesWithImageRowProps = {
  title?: string;
  description?: string;
  image: string;
  imageAlt: string;
  features: string[];
  children?: ReactNode;
  reverse?: boolean;
  narrowImage?: boolean;
};

const FeaturesWithImageRow = (props: IFeaturesWithImageRowProps) => {
  const verticalFeatureClass = className('flex', 'flex-wrap', 'items-center', {
    'flex-row-reverse': props.reverse,
  });

  const class2 = className('w-full', 'sm:px-6', {
    'md:w-2/3': props.narrowImage,
    'md:w-1/2': !props.narrowImage,
  });

  const class3 = className('w-full', 'p-6', {
    'md:w-1/3': props.narrowImage,
    'md:w-1/2': !props.narrowImage,
  });

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className={class2}>
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        <ul className="mt-6 text-xl leading-9 list-none">
          {props.features.map((f) => (
            <li key={f} className="mb-2">
              – {f}
            </li>
          ))}
        </ul>
        {props.children}
      </div>

      <div className={class3}>
        <img
          className="rounded-2xl mx-auto w-full max-w-[400px]"
          src={`${router.basePath + props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { FeaturesWithImageRow };
