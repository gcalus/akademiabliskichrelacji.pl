import QuoteImage from "../icons/quote-left.svg";

type ITestimonialsRowProps = {
  testimonials: { text: string; name: string; image?: JSX.Element }[];
};

const TestimonialsRow = ({ testimonials }: ITestimonialsRowProps) => (
  <div className="max-w-screen-lg mx-auto relative overflow-x-hidden shadow-inner">
    <div className="inset-container flex gap-4 sm:gap-8 overflow-x-scroll p-4 sm:p-6 mb-2">
      {testimonials.map((t, i) => (
        <div
          className="w-5/6 sm:max-w-lg bg-gray-50 rounded-3xl p-4 sm:p-10 pt-3 shadow-lg shrink-0"
          key={i}
        >
          <QuoteImage className="w-14 h-14 text-fuchsia-400" />
          <p>{t.text}</p>
          <div className="w-64 border-t border-slate-300 mt-4 mb-2"></div>
          <div className="flex items-center gap-3">
            {t.image}
            <h3 className="text-fuchsia-500 text-lg font-semibold">{t.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export { TestimonialsRow };
