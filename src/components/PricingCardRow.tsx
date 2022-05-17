import React from 'react';

import { FundamentButton } from './FundamentButton';

type Props = { features: string[]; price: string; className?: string };

const PricingCardRow = ({ features, price, className }: Props) => {
  return (
    <div
      className={`p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      <h5 className="mb-4 text-xl font-medium text-black dark:text-white">
        Zbuduj solidny fundament relacji
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="text-3xl font-semibold">zł</span>
      </div>
      <ul role="list" className="my-7 space-y-5">
        <div className="mx-auto w-64 border-t"></div>
        {features.map((f) => (
          <React.Fragment key={f}>
            <li className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {f}
              </span>
            </li>
            <div className="mx-auto w-64 border-t"></div>
          </React.Fragment>
        ))}
      </ul>
      <div className="text-center">
        <FundamentButton />
      </div>
    </div>
  );
};

export { PricingCardRow };
