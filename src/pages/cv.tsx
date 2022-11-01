/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { HomeIcon, MailIcon } from "@heroicons/react/solid";
import Image from "next/image";

import githubImage from "../../public/assets/images/github.png";
import linkedinImage from "../../public/assets/images/linkedin.png";
import pg from "../../public/assets/images/pg.jpeg";
import photo from "../../public/assets/images/photo.jpg";
import wsaib from "../../public/assets/images/wsaib.png";
import { Meta } from "../components/Meta";
import { StickyBackground } from "../components/StickyBackground";
import { AppConfig } from "../utils/AppConfig";

// class="
const variantClasses = {
  regular: "font-normal text-sm",
  title: "font-medium text-lg tracking-[0.2em] uppercase mb-4 block",
  label: "font-bold text-[13px] uppercase block",
  description: "font-medium text-xs leading-3",
};
// "

type TypographyVariant = keyof typeof variantClasses;

type Props = {
  className?: string;
  variant?: TypographyVariant;
  as?: keyof JSX.IntrinsicElements;
};

const Text: React.FC<Props> = ({
  variant = "regular",
  className,
  children,
  as: CustomTag = "p",
}) => (
  <CustomTag className={`${variantClasses[variant]} ${className}`}>
    {children}
  </CustomTag>
);

const Index = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* <Hero /> */}

    <StickyBackground
      className="shadow-sm shadow-slate-400/70"
      backgroundHeightSpacing={{ h: "h-48", top: "top-48" }}
      backdrop="bg-gray-700/70"
    >
      <header className="max-w-screen-lg px-12 py-12 drop-shadow-md flex justify-between mx-auto">
        <div className="text-3xl sm:text-5xl font-title whitespace-pre-line">
          <h1 className="tracking-wider uppercase">
            <span className="font-medium">Marek</span>
            {" Całus"}
          </h1>
          <h2 className="tracking-[0.15em] text-2xl text-slate-200 uppercase">
            {"Web developer"}
          </h2>
        </div>
        <nav className="flex flex-col gap-1 items-end text-sm leading-6">
          <a href="https://mcalus.dev" className="hover:underline">
            <span className="mr-2">mcalus.dev</span>
            <HomeIcon className="text-white h-4 inline mb-1" />
          </a>
          <a href="https://github.com/mcalus3" className="hover:underline">
            <span className="mr-2">github.com/mcalus3</span>
            <Image
              className="invert"
              src={githubImage}
              height="15"
              width="15"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/marek-ca%C5%82us-745150126"
            className="hover:underline"
          >
            <span className="mr-2">linkedin.com/in/marek-calus/</span>
            <Image
              className="invert"
              src={linkedinImage}
              height="15"
              width="15"
              alt=""
            />
          </a>
          <a href="marek.calus3@gmail.com" className="hover:underline">
            <span className="mr-2">marek.calus3@gmail.com</span>
            <MailIcon className="text-white h-4 inline" />
          </a>
        </nav>
      </header>
    </StickyBackground>
    <div className="px-12 mt-10 flex divide-x divide-slate-400 max-w-screen-lg mx-auto">
      <div className="w-56 pr-11 shrink-0">
        <div className="p-4 pt-0">
          <Image className="rounded-full" src={photo} alt="" />
        </div>
        <div className="pt-2 pb-6">
          <Text variant="title">Education</Text>
          <Text variant="label">Master’s Degree</Text>
          <div className="flex my-[6px]">
            <div className="shrink-0 -ml-2">
              <Image src={wsaib} width="40" height="40" alt="" />
            </div>
            <Text className="leading-4">
              Gdynia University of Business And Administration
            </Text>
          </div>
          <Text className="mb-1" variant="description">
            International management
          </Text>
          <Text variant="description" className="mb-5">
            2018 - 2019
          </Text>
          <Text variant="label">Engineer’s Degree</Text>
          <div className="flex my-[6px]">
            <div className="shrink-0 -ml-1">
              <Image src={pg} width="40" height="40" alt="" />
            </div>
            <Text>Gdańsk University of Technology</Text>
          </div>
          <Text className="mb-1" variant="description">
            Robotics Engneering
          </Text>
          <Text variant="description">2013 - 2017</Text>
        </div>
        <div className="border-b border-slate-400 w-1/2" />
        <div className="py-6">
          <Text variant="title">Skills</Text>
          <Text variant="label">Professional</Text>
        </div>
        <div className="border-b border-slate-400 w-1/2" />
        <div className="py-6">
          <Text variant="title">Hobbies</Text>
          <Text>Gaming</Text>
        </div>
      </div>
      <div className="grow pl-11 divide-y divide-slate-400">
        <div className="pb-6">
          <Text variant="title">Profile</Text>
          <Text className="mb-2">
            Web engineer using modern web tech to lead web apps development
            through the whole implementation process - from figma boards to
            full-fledged product launch.
          </Text>
          <Text>
            Passionate about the possibilities that web dev ecosystem gives us
            today and the direction toward which it's heading.
          </Text>
        </div>
        <div className="py-6">
          <Text variant="title">Work experience</Text>
          <div className="mb-8 relative">
            <div className="w-3 h-3 rounded-full bg-slate-400 absolute top-1 left-[-50.50px]"></div>
            <Text variant="label">Silky Coders</Text>
            <Text className="space-x-3">
              <span>Senior frontend developer</span>
              <span>|</span>
              <span>2021 - 2023</span>
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Text>
            <ul className="list-disc ml-3">
              <Text as="li">asdf</Text>
              <Text as="li">fdsa</Text>
              <Text as="li">qfwe</Text>
            </ul>
          </div>
          <div className="mb-8 relative">
            <Text variant="label">Silky Coders</Text>
            <Text className="space-x-3">
              <span>Senior frontend developer</span>
              <span>|</span>
              <span>2021 - 2023</span>
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Text>
            <ul className="list-disc ml-3">
              <Text as="li">asdf</Text>
              <Text as="li">fdsa</Text>
              <Text as="li">qfwe</Text>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Index;
