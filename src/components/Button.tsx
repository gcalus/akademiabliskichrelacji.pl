import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  variant?: 'contained' | 'outlined' | 'text';
};

const Button = (props: IButtonProps) => {
  const { xl = false, variant = 'contained', children } = props;
  const btnClass = className({
    btn: true,
    'btn-xl': xl,
    'btn-base': !xl,
    'btn-contained': variant === 'contained',
    'btn-outlined': variant === 'outlined',
  });

  return (
    <div className={btnClass}>
      {children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-contained {
            @apply text-white bg-primary-500;
          }

          .btn-contained:hover {
            @apply bg-primary-600;
          }

          .btn-outlined {
            @apply bg-transparent text-primary-700 font-semibold hover:text-white py-2 px-4 border border-primary-500 rounded;
          }

          .btn-outlined:hover {
            @apply border-transparent bg-primary-500;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
