import Image from "next/image";

import logo from "../../../public/assets/blog/cropped-logo.webp";
import { StickyBackground } from "../StickyBackground";
import Container from "./container";

const Intro = () => (
  <StickyBackground
    backgroundHeightSpacing={{ h: "h-80", top: "top-80" }}
    className="shadow-fuchsia-400/75 shadow mb-10"
  >
    <Container className="xl:max-w-7xl">
      <section className="flex-col md:flex-row flex gap-5 items-center md:justify-between mt-12 md:mt-20 mb-16 md:mb-8">
        <div className="md:hidden rounded-md shadow-pink-300 shadow h-[100px] w-[240px] md:w-[300px] md:h-[125px]">
          <Image src={logo} alt="akademia bliskich relacji logo" />
        </div>
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 drop-shadow-lg">
          Blog
        </h1>
        <div className="hidden md:block rounded-md shadow-pink-300 shadow h-[100px] w-[240px] md:w-[300px] md:h-[125px]">
          <Image src={logo} alt="akademia bliskich relacji logo" />
        </div>
      </section>
    </Container>
  </StickyBackground>
);

export default Intro;
