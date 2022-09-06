import { ReactNode } from "react";

import className from "classnames";
import Image, { StaticImageData } from "next/image";

import imageDefault from "../../public/assets/images/kurs2.png";

type IDescriptionWithImageRowProps = {
  title?: string;
  description?: string | ReactNode;
  image: StaticImageData;
  reverse?: boolean;
  textRight?: boolean;
  children?: ReactNode;
};

const DescriptionWithImageRow = ({
  title,
  description,
  image = imageDefault,
  reverse,
  textRight,
  children,
}: IDescriptionWithImageRowProps) => {
  const verticalFeatureClass = className(
    "mt-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": reverse,
    },
    {
      "text-center": !textRight,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full lg:w-1/2 sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{title}</h3>
        {typeof description === "string" ? (
          <div
            className="mt-6 text-xl leading-9"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
        ) : (
          <div className="mt-6 text-xl leading-9 max-w-prose">
            {description}
          </div>
        )}
        {children}
      </div>

      <div className="w-full max-w-[580px] lg:w-1/2 p-6 mx-auto">
        <Image src={image} alt="" className="rounded-2xl" placeholder="blur" />
      </div>
    </div>
  );
};

export { DescriptionWithImageRow };
