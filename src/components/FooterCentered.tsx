import { ReactNode } from "react";

import { FooterCopyright } from "./FooterCopyright";
import { FooterIconList } from "./FooterIconList";

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList?: ReactNode;
  children?: ReactNode;
};

const FooterCentered = (props: ICenteredFooterProps) => (
  <div className="text-center text-black py-6 bg-gray-100">
    {props.logo}

    <nav>
      <ul className="navbar mt-4 flex flex-row justify-center font-medium text-xl text-gray-800 gap-4">
        {props.children}
      </ul>
    </nav>

    <div className="flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>
  </div>
);

export { FooterCentered };
