import Link from 'next/link';
import { useRouter } from 'next/router';

import { Background } from '../components/Background';
import { Button } from '../components/Button';
import { CTABanner } from '../components/CTABanner';
import { DescriptionWithImageRow } from '../components/DescriptionWithImageRow';
import { FeaturesWithImageRow } from '../components/FeaturesWithImageRow';
import { FooterCentered } from '../components/FooterCentered';
import { Meta } from '../components/Meta';
import { NavbarTwoColumns } from '../components/NavbarTwoColumns';
import { Section } from '../components/Section';
import { AppConfig } from '../utils/AppConfig';
import translationsPl from '../utils/konfliktywzwiazku-translations-pl.json';

const Index = () => {
  const router = useRouter();
  const translations = translationsPl;

  return (
    <div className="antialiased text-gray-700">
      <Meta title={AppConfig.title} description={AppConfig.description} />

      {/* <Hero /> */}

      <Background
        color="bg-gray-700/50"
        image="/assets/images/hero-background2.png"
      >
        <Section className="py-3">
          <NavbarTwoColumns
            logo={
              <img
                width={100}
                src={`${router.basePath}/assets/images/logo.png`}
                alt={'logo'}
              />
            }
          >
            {translations.index.Hero.title}
          </NavbarTwoColumns>
        </Section>
        <Section className="pt-4 pb-10 px-10">
          <header className="text-center drop-shadow-md">
            <h1 className="text-3xl sm:text-5xl font-title font-bold whitespace-pre-line leading-hero">
              {translations.index.Hero.subtitle}
            </h1>
          </header>
        </Section>
      </Background>

      {/* <VerticalFeatures /> */}

      <Section
        className="pt-16"
        title={translations.index.Section1.title}
        description={translations.index.Section1.subtitle}
      >
        <FeaturesWithImageRow
          reverse
          title={''}
          description={''}
          image={translations.index.About1.image}
          imageAlt={''}
          features={translations.index.About1.features}
        ></FeaturesWithImageRow>
      </Section>

      <Section
        className="pb-3"
        description={translations.index.Section2.subtitle}
      />

      <Section className="pt-6">
        <FeaturesWithImageRow
          narrowImage
          title={translations.index.About2.title}
          description={''}
          image={translations.index.About2.image}
          imageAlt={''}
          features={translations.index.About2.features}
        ></FeaturesWithImageRow>
      </Section>

      <Section className="pt-6">
        <DescriptionWithImageRow
          reverse
          title={translations.index.About3.title}
          description={translations.index.About3.subtitle}
          image={translations.index.About3.image}
          imageAlt=""
          textRight
        />
      </Section>

      <Section className="pt-6">
        <FeaturesWithImageRow
          narrowImage
          title={translations.index.About4.title}
          image={translations.index.About4.image}
          imageAlt={''}
          features={translations.index.About4.features}
        ></FeaturesWithImageRow>
      </Section>

      {/* <Banner /> */}

      <Section>
        <CTABanner
          title={translations.index.CTABanner.title}
          subtitle={translations.index.CTABanner.subtitle}
          button={
            <Link href="https://landing.mailerlite.com/webforms/landing/q4d0o3">
              <a>
                <Button xl>{translations.index.CTABanner.button}</Button>
              </a>
            </Link>
          }
        />
      </Section>

      {/* <Footer /> */}

      <Background
        color="bg-gray-100"
        image="/assets/images/hero-background2.png"
      >
        <Section>
          <FooterCentered
            logo={'Śledź nas na social mediach:'}
            iconList={
              <>
                <Link href="https://www.instagram.com/akademiabliskichrelacji/">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </Link>

                <Link href="https://www.facebook.com/akademiabliskichrelacji">
                  <a>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                    </svg>
                  </a>
                </Link>
              </>
            }
          >
            {/* <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Docs</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                <a>GitHub</a>
              </Link>
            </li> */}
          </FooterCentered>
        </Section>
      </Background>
    </div>
  );
};

export default Index;
