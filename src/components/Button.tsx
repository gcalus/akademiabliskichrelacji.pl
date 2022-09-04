import className from "classnames";

const VARIANTS = {
  contained: "text-white bg-primary-500 hover:bg-primary-600 drop-shadow-md",
  gradient:
    "text-white bg-gradient-to-tl from-indigo-500 via-purple-900 to-pink-500 drop-shadow-md transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100",
  outlined:
    "bg-transparent text-primary-700 font-semibold hover:text-white py-2 px-4 border border-primary-500 rounded hover:border-transparent hover:bg-primary-500",
  text: "",
};

type IButtonProps = {
  xl?: boolean;
  variant?: keyof typeof VARIANTS;
  className?: string;
  onClick?: () => void;
  children: string;
};

const SIZES = {
  base: "text-lg font-semibold py-2 px-4",
  xl: "font-bold text-xl py-4 px-6",
};

const Button = (props: IButtonProps) => {
  const sizeClasses = SIZES[props.xl ? "xl" : "base"];
  const variantClasses = VARIANTS[props.variant || "contained"];
  const btnClass = className(props.className, sizeClasses, variantClasses, {
    "inline-block rounded-md text-center": true,
  });

  return (
    <button className={btnClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export { Button };
