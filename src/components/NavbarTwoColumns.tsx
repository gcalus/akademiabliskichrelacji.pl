import { ReactNode } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import logoDefault from "../../public/assets/images/logo.png";

type INavbarProps = {
  logo?: StaticImageData;
  children?: ReactNode;
};

const NavbarTwoColumns = ({
  logo = logoDefault,
  children = (
    <>
      <li>
        <a href="https://gosiacalus.pl/">Blog</a>
      </li>
      <li>
        <a href="https://sklep.gosiacalus.pl/">Sklep</a>
      </li>
    </>
  ),
}: INavbarProps) => (
  <header className="flex flex-wrap justify-between items-center px-6 py-6 drop-shadow-md max-w-screen-xl mx-auto">
    <div className="w-36">
      <Link href="/">
        <a>{<Image src={logo} alt={"logo"} />}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-bold text-2xl gap-5">
        {children}
      </ul>
    </nav>
  </header>
);

export { NavbarTwoColumns };
