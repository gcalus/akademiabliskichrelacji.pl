import { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/solid";

type IAccordionProps = {
  accordions: {
    title: string;
    description: string | JSX.Element;
  }[];
  className: string;
};

const FakeAccordion = (props: IAccordionProps) => (
    <div className={props.className}>
      {props.accordions.map((item) => (
        <div key={item.title}>
          <h2>
            <div className="flex items-center focus:ring-4 focus:ring-gray-200 justify-between p-5 w-full font-medium text-left border border-gray-200 border-b-0 text-gray-900 bg-gray-100 hover:bg-gray-100 rounded-t-xl">
              <span className="font-semibold text-lg">{item.title}</span>
              <ChevronDownIcon className={"h-6 rotate-180"} />
            </div>
          </h2>
          <div className={"block"}>
            <div className="p-5 border border-gray-200">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );

export { FakeAccordion };
