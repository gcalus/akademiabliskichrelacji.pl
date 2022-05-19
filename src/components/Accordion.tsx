import { useState } from 'react';

type IAccordionProps = {
  accordions: {
    title: string;
    description: string | JSX.Element;
  }[];
};

const Accordion = (props: IAccordionProps) => {
  const [extended, setExtended] = useState(false);
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {props.accordions.map((item) => (
        <>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => setExtended(!extended)}
            >
              <span>{item.title}</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0 rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            aria-labelledby="accordion-collapse-heading-1"
            className={`${extended ? 'block' : 'hidden'}`}
          >
            <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              {item.description}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export { Accordion };
