import { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/solid";

type IAccordionProps = {
  accordions: {
    title: string;
    description: string | JSX.Element;
  }[];
  className: string;
};

const Accordion = (props: IAccordionProps) => {
  const [extended, setExtended] = useState(false);
  return (
    <div className={props.className}>
      {props.accordions.map((item) => (
        <div key={item.title}>
          <h2>
            <button
              type="button"
              className="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl"
              onClick={() => setExtended(!extended)}
            >
              <span>{item.title}</span>
              <ChevronDownIcon
                className={`h-6 ${extended ? "rotate-180" : ""}`}
              />
            </button>
          </h2>
          <div className={`${extended ? "block" : "hidden"}`}>
            <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Accordion };
