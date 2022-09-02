import { ReactNode } from "react";

type IFeaturesRowProps = {
  title?: string | ReactNode;
  description?: string;
  children?: ReactNode;
  features: string[];
  punctor?: string | ReactNode;
};

const FeaturesRow = ({
  title,
  description,
  children,
  features,
  punctor = "–",
}: IFeaturesRowProps) => (
  <div>
    <h3 className="text-3xl text-gray-900 font-semibold">{title}</h3>
    <div className="mt-6 text-xl leading-9">{description}</div>
    <ul className="mt-6 text-xl leading-9 list-none">
      {features.map((f) => (
        <li key={f} className="mb-2">
          {punctor} {f}
        </li>
      ))}
    </ul>
    {children}
  </div>
);

export { FeaturesRow };
