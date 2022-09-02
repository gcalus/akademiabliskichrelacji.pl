import { ReactNode } from "react";

type IBigFeaturesRowProps = {
  title?: string | ReactNode;
  description?: string;
  features: { image: JSX.Element; title: string; feature: string }[];
};

const BigFeaturesRow = ({
  title,
  description,
  features,
}: IBigFeaturesRowProps) => (
  <div>
    <h3 className="text-black text-2xl font-semibold text-center">{title}</h3>
    <div className="mt-6 text-xl leading-9">{description}</div>
    <div className="mt-6 text-xl leading-9 list-none flex flex-wrap gap-8 md:gap-12 justify-center">
      {features.map((f) => (
        <div
          key={f.title}
          className="max-w-md md:max-w-xs flex flex-col  px-3 py-4 gap-4 items-center border rounded-2xl bg-purple-50 text-gray-800 shadow"
        >
          {f.image}
          <h4 className="text-black text-xl">{f.title}</h4>
          <p className="self-start text-base leading-6">{f.feature}</p>
        </div>
      ))}
    </div>
  </div>
);

export { BigFeaturesRow };
