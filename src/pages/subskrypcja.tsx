import Image from "next/image";
import Link from "next/link";

import logo from "../../public/assets/images/logo.png";
import { FooterCentered } from "../components/FooterCentered";
import { Meta } from "../components/Meta";
import { Section } from "../components/Section";
import { StickyBackground } from "../components/StickyBackground";
import { AppConfig } from "../utils/AppConfig";

const Subskrypcja = () => (
  <div className="min-h-screen flex flex-col">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* <Hero /> */}

    <StickyBackground backgroundHeightSpacing={{ h: "h-32", top: "top-32" }}>
      <header className="max-w-screen-xl mx-auto px-6 py-3 drop-shadow-md h-full flex flex-col">
        <nav className="flex gap-4 justify-between items-center font-bold text-2xl">
          <Link href="/">
            <a>{<Image src={logo} alt={"logo"} width={100} height={100} />}</a>
          </Link>

          {"Akademia bliskich relacji"}
        </nav>
        {/* <div className="text-3xl sm:text-5xl font-title font-bold whitespace-pre-line leading-hero text-center my-auto"></div> */}
      </header>
    </StickyBackground>

    {/* ThankYou */}

    <h2 className="text-4xl text-gray-900 font-bold text-center mt-10">
      Dziękuję za potwierdzenie subskrypcji, do zobaczenia!
    </h2>

    {/* Footer */}

    <Section className="py-6 mt-auto self-stretch">
      <FooterCentered logo={"Śledź nas na social mediach:"}></FooterCentered>
    </Section>
  </div>
);

export default Subskrypcja;
