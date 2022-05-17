type ITestimonialsRowProps = {
  testimonials: { text: string; name: string; image: JSX.Element }[];
};

const TestimonialsRow = ({ testimonials }: ITestimonialsRowProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:flex-wrap">
      {testimonials.map((t, i) => (
        <div
          className="max-w-md mx-auto bg-white rounded-xl p-5 shadow-lg m-2"
          key={i}
        >
          <p>{t.text}</p>
          <div className="mt-5 flex items-center gap-3">
            {t.image}
            <h3 className="font-semibold">{t.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export { TestimonialsRow };
