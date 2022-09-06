import React, { ReactNode } from "react";

import { FundamentButton } from "./FundamentButton";
import { ShortDivider } from "./ShortDivider";

type Card = {
  title: string;
  features: [punctor: string | ReactNode, text: string | ReactNode][];
  price: string;
};
type Props = { cards: Card[]; className?: string };

const PricingCardRow = ({ cards, className }: Props) => (
  <div className={className}>
    <h5 className="text-center mb-4 text-2xl font-semibold text-black">
      Zbuduj solidny fundament relacji:
    </h5>
    <div className="flex flex-col space-y-1 sm:space-y-0 items-center sm:items-stretch sm:flex-row sm:justify-center sm:space-x-1">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className={`p-2 max-w-sm bg-white rounded-lg border shadow-md sm:p-4 basis-full flex flex-col justify-between`}
        >
          <div>
            <h5
              className={`mb-4 ml-2 mt-2 sm:ml-0 sm:mt-0 text-2xl font-semibold text-black ${
                i >= 1 ? "gradient-text" : ""
              }
              `}
            >
              {card.title}
              {i === 2 && <ShortDivider my="my-0" />}
            </h5>

            <div className="flex items-baseline text-gray-900">
              <span className="text-5xl font-extrabold tracking-tight">
                {card.price}
              </span>
              <span className="text-3xl font-semibold">zł</span>
            </div>
            <ul role="list" className="my-7 space-y-1">
              <div className="mx-auto w-full border-t"></div>
              {card.features.map((f, ii) => (
                <React.Fragment key={ii}>
                  <li className="flex space-x-3 text-lg sm:text-sm lg:text-lg">
                    <span>{f[0] || "-"}</span>
                    <span className="font-normal text-gray-600">{f[1]}</span>
                  </li>
                  <div className="mx-auto w-3/4 border-t"></div>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <FundamentButton />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export { PricingCardRow };
