import { ArrowLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Header = () => (
  <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Link href="/blog">
      <a className="hover:underline">
        <ArrowLeftIcon className="h-[1em] inline pb-1" /> Powrót do bloga
      </a>
    </Link>
    .
  </h2>
);

export default Header;
