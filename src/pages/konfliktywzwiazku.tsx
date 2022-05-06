import Image from 'next/image';
import Link from 'next/link';

import image3 from '../../public/assets/images/1.jpg';
import image1 from '../../public/assets/images/kurs1.png';
import image2 from '../../public/assets/images/kurs2.png';
import image4 from '../../public/assets/images/kurs3.png';
import logo from '../../public/assets/images/logo.png';
import { Button } from '../components/Button';
import { CTABanner } from '../components/CTABanner';
import { DescriptionWithImageRow } from '../components/DescriptionWithImageRow';
import { FeaturesWithImageRow } from '../components/FeaturesWithImageRow';
import { FooterCentered } from '../components/FooterCentered';
import { Meta } from '../components/Meta';
import { Section } from '../components/Section';
import { StickyBackground } from '../components/StickyBackground';
import { AppConfig } from '../utils/AppConfig';
import translationsPl from '../utils/konfliktywzwiazku-translations-pl.json';

const Index = () => {
  const translations = translationsPl;

  return (
    <div className="antialiased text-gray-700">
      <Meta title={AppConfig.title} description={AppConfig.description} />

      {/* <Hero /> */}

      <StickyBackground backgroundHeightSpacing={{ h: 'h-96', top: 'top-96' }}>
        <header className="max-w-screen-xl mx-auto px-6 py-3 drop-shadow-md">
          <nav className="flex gap-4 justify-between items-center font-bold text-2xl">
            <Link href="/">
              <a>
                {<Image src={logo} alt={'logo'} width={100} height={100} />}
              </a>
            </Link>

            {translations.index.Hero.title}
          </nav>
          <h1 className="text-3xl sm:text-5xl font-title font-bold whitespace-pre-line leading-hero pt-4 text-center">
            {translations.index.Hero.subtitle}
          </h1>
        </header>
      </StickyBackground>

      {/* <VerticalFeatures /> */}

      <Section
        className="pt-16 bg-white"
        title={translations.index.Section1.title}
        description={translations.index.Section1.subtitle}
      >
        <FeaturesWithImageRow
          reverse
          title={''}
          description={''}
          image={image1}
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
          image={image2}
          features={translations.index.About2.features}
        ></FeaturesWithImageRow>
      </Section>

      <Section className="pt-6">
        <DescriptionWithImageRow
          reverse
          title={translations.index.About3.title}
          description={translations.index.About3.subtitle}
          image={image3}
          textRight
        />
      </Section>

      <Section className="pt-6">
        <FeaturesWithImageRow
          narrowImage
          title={translations.index.About4.title}
          image={image4}
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

      <Section className="py-16 bg-gray-100">
        <FooterCentered logo={'Śledź nas na social mediach:'}></FooterCentered>
      </Section>
    </div>
  );
};

export default Index;
