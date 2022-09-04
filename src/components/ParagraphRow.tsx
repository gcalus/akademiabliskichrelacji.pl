import { ReactNode } from "react";

type IParagraphRowProps = {
  title?: string | ReactNode;
  children?: ReactNode;
};

const ParagraphRow = ({ title, children }: IParagraphRowProps) => (
  <div>
    <h3 className="text-3xl text-gray-900 font-semibold">{title}</h3>
    <div className="mt-6 text-xl leading-9">{children}</div>
  </div>
);

export { ParagraphRow };
