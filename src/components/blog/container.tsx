type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Container = ({ className, children }: Props) => (
  <div className={`container mx-auto px-5 ${className}`}>{children}</div>
);

export default Container;
