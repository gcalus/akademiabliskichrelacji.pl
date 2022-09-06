import React, { ReactNode } from "react";

import { ShortDivider } from "./ShortDivider";

type Card = {
  title: string;
  features: [punctor: string | ReactNode, text: string | ReactNode][];
  oldPrice: string;
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
                i >= 1 ? "gradient-text drop-shadow-md" : ""
              }
              `}
            >
              {card.title}
              {i === 2 && <ShortDivider my="my-0 drop-shadow-md" />}
            </h5>

            <span className="self-start mt-3 line-through text-xl">
              {card.oldPrice} zł
            </span>
            <div
              className={`flex items-baseline -mt-3 text-gray-900 gap-1 ${
                i === 1 && "gradient-text-dark drop-shadow-lg"
              } ${i === 2 && "gradient-text-accent drop-shadow-lg"}`}
            >
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
                    <span className="font-normal text-gray-700">{f[1]}</span>
                  </li>
                  <div className="mx-auto w-3/4 border-t"></div>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="text-center">
            {i === 0 && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sklep.gosiacalus.pl/produkt/program-mentoringowy-zbuduj-solidny-fundament-relacji/"
                className="block mx-2 p-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-tl from-black via-purple-dark to-purple-800 drop-shadow-md transition-all hover:from-purple-dark hover:via-purple-900 hover:to-purple-700"
              >
                Dołącz do programu
              </a>
            )}
            {i === 1 && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sklep.gosiacalus.pl/produkt/program-mentoringowy-standard-zbuduj-solidny-fundament-relacji/"
                className="block mx-2 p-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-tl from-purple-dark via-purple-900 to-pink-500 drop-shadow-md transition-all hover:from-purple-dark hover:via-purple-800 hover:to-pink-400"
              >
                Dołącz do programu
              </a>
            )}
            {i === 2 && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sklep.gosiacalus.pl/produkt/program-mentoringowy-premiumzbuduj-solidny-fundament-relacji/"
                className="block mx-2 p-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-tl from-indigo-500 via-purple-900 to-pink-500 drop-shadow-md transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Dołącz do programu
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export { PricingCardRow };
