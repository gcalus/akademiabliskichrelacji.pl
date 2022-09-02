type IShortDividerProps = {
  colorFrom?: string;
  colorVia?: string;
  colorTo?: string;
  my?: string;
  center?: boolean;
};

const ShortDivider = ({
  colorFrom = "from-indigo-500",
  colorVia = "via-purple-500",
  colorTo = "to-pink-500",
  my = "my-4",
  center = false,
}: IShortDividerProps) => {
  const mx = center ? "mx-auto" : "";
  return (
    <div
      className={`${mx} ${my} h-1 w-20 md:w-28 bg-gradient-to-r ${colorFrom} ${colorVia} ${colorTo}`}
    ></div>
  );
};

export { ShortDivider };
