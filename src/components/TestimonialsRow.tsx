type ITestimonialsRowProps = {
  testimonials: { text: string; name: string; image: JSX.Element }[];
};

const TestimonialsRow = ({ testimonials }: ITestimonialsRowProps) => {
  return (
    <div className="flex flex-col md:flex-row max-w-2xl gap-4">
      {testimonials.map((t, i) => (
        <div
          className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-lg m-2"
          key={i}
        >
          <p>{t.text}</p>
          <div className="mt-5 flex items-center">
            {t.image}
            <div className="ml-3">
              <h3 className="font-semibold">{t.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { TestimonialsRow };
