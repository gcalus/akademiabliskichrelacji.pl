import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => (
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-12 text-center md:text-left max-w-prose">
    {children}
  </h1>
);

export default PostTitle;
