import Image from 'next/image';

import quoteImage from '../../public/assets/images/quote-left.svg';

type ITestimonialsRowProps = {
  testimonials: { text: string; name: string; image?: JSX.Element }[];
};

const TestimonialsRow = ({ testimonials }: ITestimonialsRowProps) => {
  return (
    <div className="max-w-screen-lg  mx-auto relative overflow-x-hidden shadow-inner">
      <div className="inset-container flex gap-8 overflow-x-scroll p-6 mb-2">
        {testimonials.map((t, i) => (
          <div
            className="w-4/5 sm:max-w-lg bg-gray-50 rounded-3xl p-10 pt-3 shadow-lg shrink-0"
            key={i}
          >
            <div
              style={{
                filter:
                  'invert(88%) sepia(28%) saturate(3513%) hue-rotate(204deg) brightness(100%) contrast(98%)',
              }}
            >
              <Image src={quoteImage} width={60} height={60} />
            </div>
            <p>{t.text}</p>
            <div className="w-64 border-t border-slate-300 mt-4 mb-2"></div>
            <div className="flex items-center gap-3">
              {t.image}
              <h3 className="text-fuchsia-500 text-lg font-semibold">
                {t.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TestimonialsRow };
