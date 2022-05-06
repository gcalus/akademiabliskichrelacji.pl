import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logoDefault from '../../public/assets/images/logo.png';

type INavbarProps = {
  logo?: StaticImageData;
  children?: ReactNode;
};

const NavbarTwoColumns = ({
  logo = logoDefault,
  children = (
    <>
      <li>
        <Link href="https://gosiacalus.pl/">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="https://sklep.gosiacalus.pl/">
          <a>Sklep</a>
        </Link>
      </li>
    </>
  ),
}: INavbarProps) => (
  <header className="flex flex-wrap justify-between items-center px-6 py-6 drop-shadow-md max-w-screen-xl mx-auto">
    <div className="w-36">
      <Link href="/">
        <a>{<Image src={logo} alt={'logo'} />}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-bold text-2xl">
        {children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </header>
);

export { NavbarTwoColumns };
