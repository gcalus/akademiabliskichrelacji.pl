import Link from 'next/link';

import oMnieImage from '../../public/assets/images/1.jpg';
import ebookImage from '../../public/assets/images/ebook.png';
import kursImage from '../../public/assets/images/kurs.png';
import listyImage from '../../public/assets/images/listy.png';
import { Button } from '../components/Button';
import { CTABanner } from '../components/CTABanner';
import { DescriptionWithImageRow } from '../components/DescriptionWithImageRow';
import { FooterCentered } from '../components/FooterCentered';
import { Meta } from '../components/Meta';
import { NavbarTwoColumns } from '../components/NavbarTwoColumns';
import { Section } from '../components/Section';
import { StickyBackground } from '../components/StickyBackground';
import { AppConfig } from '../utils/AppConfig';
import translationsPl from '../utils/index-translations-pl.json';

const Index = () => {
  const translations = translationsPl;

  return (
    <div className="antialiased text-gray-700">
      <Meta title={AppConfig.title} description={AppConfig.description} />

      {/* <Hero /> */}

      <StickyBackground>
        <NavbarTwoColumns />
        <div className="text-center drop-shadow-md py-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-title font-bold whitespace-pre-line leading-hero">
            {translations.index.Hero.title}
          </h1>
          <div className="text-2xl sm:text-2xl md:text-3xl mt-4 mb-16">
            {translations.index.Hero.subtitle}
          </div>
        </div>
      </StickyBackground>

      {/* <VerticalFeatures /> */}

      <Section
        className="py-16 bg-white"
        title={translations.index.Section1.title}
        description={translations.index.Section1.subtitle}
      >
        <DescriptionWithImageRow
          title={translations.index.About1.title}
          description={translations.index.About1.subtitle}
          image={oMnieImage}
        />
        <DescriptionWithImageRow
          title={translations.index.About2.title}
          description={translations.index.About2.subtitle}
          image={kursImage}
          reverse
        />
        <DescriptionWithImageRow
          title={translations.index.About3.title}
          description={translations.index.About3.subtitle}
          image={listyImage}
        />
        <DescriptionWithImageRow
          title={translations.index.About4.title}
          description={translations.index.About4.subtitle}
          image={ebookImage}
          reverse
        >
          <div className="whitespace-nowrap mt-3">
            <Link href="https://gosiacalus.pl/ebook">
              <a>
                <Button variant="outlined">
                  {translations.index.About4.cta}
                </Button>
              </a>
            </Link>
          </div>
        </DescriptionWithImageRow>
        {/* <DescriptionWithImageRow
          title={translations.index.Social.title}
          description={translations.index.Social.subtitle}
          image="/assets/images/none.png"
          imageAlt=""
        >
          <div></div>
        </DescriptionWithImageRow> */}
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

      <Section className="py-16 bg-gray-100">
        <FooterCentered logo={'Śledź nas na social mediach:'}></FooterCentered>
      </Section>
    </div>
  );
};

export default Index;
