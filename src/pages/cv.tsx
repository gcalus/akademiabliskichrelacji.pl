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
  <CustomTag className={`${className} ${variantClasses[variant]}`}>
    {children}
  </CustomTag>
);

const navigationItems = [
  [
    "https://mcalus.dev",
    "mcalus.dev",
    <HomeIcon className="text-white h-4 inline mb-1" />,
  ],
  [
    "https://github.com/mcalus3",
    "github.com/mcalus3",
    <Image
      className="invert"
      src={githubImage}
      height="15"
      width="15"
      alt=""
    />,
  ],
  [
    "https://www.linkedin.com/in/marek-ca%C5%82us-745150126",
    "linkedin.com/in/marek-calus/",
    <Image
      className="invert"
      src={linkedinImage}
      height="15"
      width="15"
      alt=""
    />,
  ],
  [
    "mailto:marek.calus3@gmail.com",
    "marek.calus3@gmail.com",
    <MailIcon className="text-white h-4 inline" />,
  ],
] as const;

const jobs = [
  {
    company: "Silky Coders",
    position: "Senior frontend developer",
    years: "2021 – 2022",
    description:
      "Working as a part of the development team on the biggest polish e-commerce site. Maintenance, implementation of new features and improving performance. One of projects included integration of web analytics tool with the storefront to increase engagement by optimizing digital customer experiences. Developed internal tooling and coordinated work between dev teams to enable software architecture scaling as business needs increased rapidly in the preceding years.",
    points: ["Typescript", "React", "Magento PHP"],
  },
  {
    company: "INTENT",
    position: "Senior frontend developer",
    years: "2020 – 2021",
    description:
      "Working independently on small and medium SaaS web apps – Typescript, React, Firebase, ExpressJS, AWS",
    points: [
      "Maintenance of internal web app for a small financial sector company written on typescript and react. I've managed to successfully implement a testing suite for the app to be able to conduct a major refactoring of the architecture to support a serious shift in the business needs and a new specification.",
      "A project for an Irish startup company that wanted to deliver a new solution for managing biofuel compliance & traceability. Think Uber, but for manure. I've helped them to iterate on the web app idea and reach quick launch and market validation.",
    ],
  },
  {
    company: "JIT TEAM",
    position: "Frontend developer",
    years: "2018 – 2020",
    points: [
      "An internal use app written with React, Typescript and ASP.NET stack for the backend. I was leading the development of the frontend part of the app, mentoring interns and managing the product roadmap based on consultations with target users.",
      "Maintenance of a SaaS suite for operators in the real estate industry. It supports all key activities related to rental management. In this project I was responsible for maintaining and building new frontend applications in React and Angular frameworks and developing backend for them in ASP.NET framework.",
      "A project for scandinavian financial institution to extract historical data of european financial market instruments and present them in more accessible way in a web app. My responsibilities spanned from managing infrastructure in Azure cloud and backend server development in ASP NET core with GraphQL API to creating a production-ready React frontend application for public use.",
    ],
  },
  {
    company: "PGS SOFTWARE",
    position: "Full-stack developer",
    years: "2017 – 2018",
    description:
      "Developing and supporting an ERP system for an e-commerce company in Great Britain.",
    points: ["C#", "ASP.NET 4", "MSSQL", "Typescript", "React"],
  },
  {
    company: "INTEL TECHNOLOGY POLAND",
    position: "Software developer intern",
    years: "2015 – 2017",
    description:
      "Developing firmware validation framework. Developing desktop application for internal use to support team’s processes.",
    points: ["C", "C#", "MSSQL"],
  },
];

const Index = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* <Hero /> */}

    <StickyBackground
      className="shadow-sm shadow-slate-400/70"
      backgroundHeightSpacing={{ h: "h-48", top: "top-48" }}
      backdrop="bg-gray-700/70"
    >
      <header className="max-w-screen-lg px-12 py-12 drop-shadow-lg flex justify-between mx-auto">
        <div className="text-3xl sm:text-5xl font-title whitespace-pre-line">
          <h1 className="tracking-wider uppercase drop-shadow-md">
            <span className="font-medium">Marek</span>
            {" Całus"}
          </h1>
          <h2 className="tracking-[0.15em] text-2xl text-slate-200 uppercase drop-shadow-md">
            Senior web developer
          </h2>
        </div>
        <nav className="flex flex-col gap-1 items-end text-sm leading-6">
          {navigationItems.map(([url, label, icon]) => (
            <a href={url} className="hover:underline">
              <span className="mr-2">{label}</span>
              {icon}
            </a>
          ))}
        </nav>
      </header>
    </StickyBackground>
    <div className="px-12 mt-10 flex divide-x divide-slate-400 max-w-screen-lg mx-auto">
      <div className="w-56 pr-11 shrink-0">
        <div className="p-4 pt-0">
          <Image className="rounded-full" src={photo} alt="" />
        </div>
        <div className="py-6 space-y-1">
          <Text variant="label">Salary expectation</Text>
          <Text variant="description">150 - 210 PLN/h netto + VAT</Text>
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
          <ul className="list-disc mb-4 space-y-1">
            <Text as="li" variant="label">
              Professional
            </Text>
            <Text as="li">Javascript/Typescript proficiency</Text>
            <Text as="li">
              Wide experience with libraries from React ecosystem
            </Text>
            <Text as="li">Backend development with Next.js framework</Text>
            <Text as="li">
              Strong web engineering foundation - able to make informed decsions
              about software architecture, infrastructure and tools
            </Text>
          </ul>
          <ul className="list-disc space-y-1">
            <Text as="li" variant="label" className="list-disc">
              Also professional
            </Text>
            <Text as="li">
              experienced in leading software development teams
            </Text>
            <Text as="li">Taking ownership of what I do</Text>
            <Text as="li">effective communicator</Text>
            <Text as="li">open-minded attitude</Text>
          </ul>
        </div>
        <div className="border-b border-slate-400 w-1/2" />
        <ul className="list-disc py-6 space-y-1">
          <Text variant="title">Hobbies</Text>
          <Text as="li">co-op gaming</Text>
          <Text as="li">dance and acrobatics</Text>
          <Text as="li">nature hikes</Text>
          <Text as="li">goofing around with my wife and kids</Text>
        </ul>
      </div>
      <div className="grow pl-11 divide-y divide-slate-400">
        <div className="pb-6">
          <Text variant="title">Profile</Text>
          <Text className="mb-2 text-slate-800 !font-medium">
            Software developer that uses modern web tech to lead web apps
            development through the whole implementation process - from figma
            boards to full-fledged product launch.
          </Text>
          <Text className="text-slate-800 !font-medium">
            Passionate about the possibilities that web dev ecosystem gives us
            today and the direction toward which it's heading.
          </Text>
        </div>
        <div className="py-6">
          <Text variant="title">Work experience</Text>
          {jobs.map((job) => (
            <div className="mb-8 relative">
              <div className="w-3 h-3 rounded-full bg-slate-400 absolute top-1 left-[-50.50px]"></div>
              <Text variant="label">{job.company}</Text>
              <Text className="space-x-3 mb-1">
                <span>{job.position}</span>
                <span>|</span>
                <span>{job.years}</span>
              </Text>
              <Text>{job.description}</Text>
              <ul className="list-disc ml-3">
                {job.points.map((point) => (
                  <Text as="li">{point}</Text>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Index;
