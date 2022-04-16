import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center drop-shadow-md">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-title font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl sm:text-2xl md:text-3xl mt-4 mb-16">
      {props.description}
    </div>

    {props.button}
  </header>
);

export { HeroOneButton };
