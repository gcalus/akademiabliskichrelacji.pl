import Image from 'next/image';
import Link from 'next/link';

import image1 from '../../public/assets/images/kurs1.png';
import logo from '../../public/assets/images/logo.png';
import questionsImage2 from '../../public/assets/images/question4.png';
import questionsImage from '../../public/assets/images/questions2.png';
import { Button } from '../components/Button';
import { FeaturesWithImageRow } from '../components/FeaturesWithImageRow';
import { FooterCentered } from '../components/FooterCentered';
import { Meta } from '../components/Meta';
import { Section } from '../components/Section';
import { ShortDivider } from '../components/ShortDivider';
import { StickyBackground } from '../components/StickyBackground';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />

      {/* <Hero /> */}

      <StickyBackground backgroundHeightSpacing={{ h: 'h-96', top: 'top-96' }}>
        <header className="max-w-screen-xl mx-auto px-6 py-3 drop-shadow-md h-full flex flex-col">
          <nav className="flex gap-4 justify-between items-center font-bold text-2xl">
            <Link href="/">
              <a>
                {<Image src={logo} alt={'logo'} width={100} height={100} />}
              </a>
            </Link>

            {'Akademia bliskich relacji'}
          </nav>
          <div className="text-3xl sm:text-5xl font-title font-bold whitespace-pre-line leading-hero text-center my-auto">
            <h1>{'Zbuduj solidny fundament relacji'}</h1>
            <h2 className="text-2xl sm:text-3xl text-center">
              {'Program mentoringowy'}
            </h2>
          </div>
        </header>
      </StickyBackground>

      {/* <VerticalFeatures /> */}

      <Section
        className="py-6 bg-white"
        description={
          <div className="sm:px-6 max-w-[70ch] mx-auto">
            <div className="flex justify-center mb-8 md:mb-10 md:mt-3">
              <Link href="">
                <a>
                  <Button xl variant="gradient">
                    Dołącz do programu
                  </Button>
                </a>
              </Link>
            </div>
            <p className="text-justify italic text-purple-dark bg-purple-200/75 shadow-[0_0_20px_10px_rgb(233,213,255)]">
              Zacznij w pełni świadomie budować swoją relację w związku i
              wyznacz drogę, którą naprawdę Ty chcesz podążać. Dzięki 3
              miesięcznej pracy ze mną oraz w małej grupie kobiet, wyznaczysz
              realne cele, zadbasz o swoje granice, ustalisz normy, którymi
              chcesz żyć na co dzień. Otrzymasz wsparcie i motywację, które
              pomogą Ci ruszyć z miejsca!
            </p>
          </div>
        }
      >
        <FeaturesWithImageRow
          title={
            <>
              <div className="flex justify-center items-center gap-2">
                <div
                  style={{
                    filter:
                      'invert(42%) sepia(7%) saturate(4430%) hue-rotate(264deg) brightness(79%) contrast(81%)',
                  }}
                >
                  <Image src={questionsImage} height={40} width={40} />
                </div>
                Czy:
              </div>
              <ShortDivider center my={'my-1'} />
            </>
          }
          narrowImage
          image={image1}
          punctor={
            <span
              style={{
                filter:
                  'invert(17%) sepia(52%) saturate(2355%) hue-rotate(271deg) brightness(92%) contrast(84%)',
              }}
            >
              <Image alt="" src={questionsImage2} height={20} width={20} />
            </span>
          }
          features={[
            'Masz poczucie, że kiedyś lepiej dogadywałaś się z partnerem, było między Wami więcej bliskości i nie kłóciliście się o mało ważne rzeczy?',
            'Nie wiesz jak zareagować, kiedy Twoje granice są przekraczane?',
            'Czujesz, że pracujesz nad sobą i próbujesz się zmieniać, ale cały czas stoisz w miejscu i nie wiesz w którym iść kierunku?',
            'Chciałabyś wziąć życie w swoje ręce i zacząć żyć wykorzystując w pełni swój potencjał jako kobieta i jako partnerka?',
            'Jesteś zmęczona ciągłym niedogadywaniem się z partnerem i nierównościami w związku?',
            'Związek to dla Ciebie ważny obszar w życiu, ale nie czujesz się w nim tak spełniona jakbyś chciała?',
          ]}
        />
      </Section>

      {/* <Footer /> */}

      <Section className="py-6 bg-gray-100">
        <FooterCentered logo={'Śledź nas na social mediach:'}></FooterCentered>
      </Section>
    </>
  );
};

export default Index;
