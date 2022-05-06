import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  variant?: 'contained' | 'outlined' | 'text';
};

const SIZES = {
  base: 'text-lg font-semibold py-2 px-4',
  xl: 'font-extrabold text-xl py-4 px-6',
};

const VARIANTS = {
  contained: 'text-white bg-primary-500 hover:bg-primary-600',
  outlined:
    'bg-transparent text-primary-700 font-semibold hover:text-white py-2 px-4 border border-primary-500 rounded hover:border-transparent hover:bg-primary-500',
  text: '',
};

const Button = (props: IButtonProps) => {
  const sizeClasses = SIZES[props.xl ? 'xl' : 'base'];
  const variantClasses = VARIANTS[props.variant || 'contained'];
  const btnClass = className(sizeClasses, variantClasses, {
    'inline-block rounded-md text-center': true,
  });

  return <div className={btnClass}>{props.children}</div>;
};

export { Button };
