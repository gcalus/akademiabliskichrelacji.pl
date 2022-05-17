import Image from 'next/image';
import Link from 'next/link';

import image3 from '../../public/assets/images/1.jpg';
import womanImage from '../../public/assets/images/creative-woman.png';
import ideaImage from '../../public/assets/images/idea.png';
import image1 from '../../public/assets/images/kurs1.png';
import logo from '../../public/assets/images/logo.png';
import questionsImage2 from '../../public/assets/images/question4.png';
import questionsImage from '../../public/assets/images/questions2.png';
import { DescriptionWithImageRow } from '../components/DescriptionWithImageRow';
import { FeaturesRow } from '../components/FeaturesRow';
import { FeaturesWithImageRow } from '../components/FeaturesWithImageRow';
import { FooterCentered } from '../components/FooterCentered';
import { FundamentButton } from '../components/FundamentButton';
import { Meta } from '../components/Meta';
import { PricingCardRow } from '../components/PricingCardRow';
import { Section } from '../components/Section';
import { ShortDivider } from '../components/ShortDivider';
import { StickyBackground } from '../components/StickyBackground';
import { TestimonialsRow } from '../components/TestimonialsRow';
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
        className="pt-6 bg-white"
        description={
          <div className="sm:px-6 max-w-[70ch] mx-auto">
            <div className="flex justify-center mb-8 md:mb-10 md:mt-3">
              <FundamentButton />
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

      <Section
        className="pt-6"
        title={
          'Jeśli tak, to program mentoringowy "zbuduj solidny fundament relacji" pomoże Ci ruszyć z miejsca!'
        }
        description={
          'Dostaniesz niezbędną wiedzę do tego, żebyś mogła być szczęśliwa i spełniona w związku. Nauczysz się dbać o siebie i dostaniesz konkretne wskazówki i narzędzia jak dbać o swoje relacje!'
        }
      >
        <FeaturesWithImageRow
          reverse
          title={
            <>
              Co da ci ten kurs?
              <ShortDivider my={'my-1'} />
            </>
          }
          image={womanImage}
          punctor={
            <span
              style={{
                filter:
                  'invert(17%) sepia(52%) saturate(2355%) hue-rotate(271deg) brightness(92%) contrast(84%)',
              }}
            >
              <Image alt="" src={ideaImage} />
            </span>
          }
          features={[
            'Ustalisz swoje cele w relacji i dzięki nim będziesz mogła rozwijać się w kierunku w którym pragniesz! Niezależnie od tego, czy druga osoba w związku jest teraz gotowa na zmiany, czy nie.',
            'Odkryjesz swoje granice i nauczysz się co robić w sytuacjach, gdy ktoś je narusza.',
            'Nauczysz się dbać o siebie, swoje potrzeby i pragnienia! Dzięki temu będziesz miała więcej zasobów na dbanie o swoje relacje.',
            'Zobaczysz, co zrobić żeby zwiększyć swój poziom zadowolenia z życia i relacji.',
            'Dowiesz się, jakie zachowania i myśli szkodzą Twojej relacji i będziesz mogła pozbyć się ich ze swojego życia.',
            'Odzyskasz swoją niezależność i zobaczysz, że to wcale nie oznacza życia "obok siebie". Zobaczysz, że możesz być niezależna od partnera i jednocześnie żyć z nim w bliskiej relacji.',
            'Spojrzysz na swój związek z innej perspektywy. Dzięki dokładnemu zdaniu sobie sprawy z historii Twojej relacji, zmian które zaszły i tego w jakim punkcie się znajdujecie, będziesz mogła ustalić najlepszą strategię pracy nad sobą.',
            'Odzyskasz swoją sprawczość!',
          ]}
        />
      </Section>

      <Section className="pt-6">
        <DescriptionWithImageRow
          title={'Kim jestem?'}
          description={
            <div className="space-y-4">
              <p>
                Nazywam się Gosia Całus. 9 lat temu weszłam w stały związek,
                który szybko okazał się być daleki od moich oczekiwań. Swoją
                satysfakcję i szczęście opierałam na szkodliwych przekonaniach,
                które wydawały mi się wtedy być jedyną słuszną drogą. Kłótnie,
                oskarżanie, problemy z komunikacją i niezadowolenie stało się
                moją codziennością. Po narodzinach pierwszego dziecka zaczęłam
                gruntowną pracę nad przekonaniami, schematami i komunikacją, co
                w ciągu zaledwie kilku lat kompletnie odmieniło moje życie.
              </p>
              <p>
                Dziś jestem w zupełnie innym miejscu. Buduję moją relację z
                mężem świadomie i z szacunkiem zarówno do siebie samej jak i
                niego. Odzyskałam moją sprawczość i nauczyłam się dbać o moje
                potrzeby i granice. Wiem, które schematy komunikacyjne i myślowe
                sprawiały, że zamiast relacji budowałam z moim mężem mur. Udało
                się go zburzyć i mogę pokazać Ci jak to zrobić!
              </p>
              <p>
                Prowadzę Akademię bliskich relacji, w której pokazuję jak
                budować relacje i komunikować się w rodzinie. Pomagam w
                zrozumieniu siebie samego i pokazuję jak bardzo codzienne
                relacje i komunikaty wpływają na jakość życia. Stworzyłam
                autorskie kursy i wyzwania rozwojowe o budowaniu dobrych relacji
                i rozwiązywaniu konfliktów, w których wzięło udział już prawie
                1000 osób! Jestem w trakcie certyfikacji na konsultanta
                kryzysowego, czyli osoby która udziela pierwszej pomocy
                psychologicznej ludziom w kryzysie.
              </p>
            </div>
          }
          image={image3}
          textRight
        />
      </Section>

      <div className="text-center py-6">
        <FundamentButton />
      </div>

      <Section className="pt-6">
        <FeaturesWithImageRow
          reverse
          title={
            <>
              Ten program jest dla Ciebie jeśli:
              <ShortDivider my={'my-1'} />
            </>
          }
          image={womanImage}
          punctor={<span className="text-purple-500">✔</span>}
          features={[
            'jesteś gotowa wziąć odpowiedzialność za swoją część relacji w związku',
            'chcesz poprawić komfort swojego życia i lepiej czuć się w swoim związku',
            'próbujesz coś zmienić w swojej relacji, ale nie za bardzo wiesz za co się zabrać',
            'masz dosyć niektórych zachowań partnera, ale nie wiesz jak sprawić żeby przestał to robić',
            'chcesz zadbać nie tylko o relacje, ale też o samą siebie!',
          ]}
        />
      </Section>

      <Section
        className="pt-6 max-w-prose"
        title={
          'Możesz dołączyć do kursu niezależnie od tego jaki masz staż w swoim związku.'
        }
        description={
          'Tematy, które będę poruszać i problemy, nad którymi będziemy wspólnie pracować, są uniwersalne i fundamentalne do tego, żeby zbudować dobrą relację z partnerem! Możesz dołączyć do kursu niezależnie od Twojego stopnia zadowolenia z relacji. Pomogę Ci zmienić perspektywę i dam gotowe narzędzia do pracy.'
        }
      >
        <h2 className="text-black text-xl font-semibold">
          Jak wygląda praca w kursie? TU ZROBIĆ W FORMIE KÓŁECZEK!!!
        </h2>
        <h3 className="text-black text-xl mt-2">Praca indywidualna</h3>
        <p>
          Otrzymasz dwuletni dostęp do platformy kursowej na której znajdziesz
          nagrania video do każdego modułu kursu (8 video). Do kursu dołączony
          jest obszerny 70-stronnicowy workbook, w którym znajdziesz ćwiczenia
          do każdej lekcji.
        </p>
        <p className="text-black text-xl mt-2">Praca w grupie</p>
        <p>
          Dostaniesz dostęp do zamkniętej grupy na facebooku, w której będą
          tylko uczestniczki kursu. Dodatkowo wszystkie spotkania na zoomie będą
          odbywać się w tej samej grupie kobiet, dzięki czemu uda nam się
          nawiązać bliższy kontakt. Grupa jest po to, żeby wzajemnie się
          wspierać i motywować!
        </p>
        <p className="text-black text-xl mt-2">Praca 1:1 ze mną</p>
        <p>
          Po przerobieniu materiałów kursowych będziesz mogła umówić się ze mną
          na 45-minutową indywidualną konsultację. Jeśli uznasz, że potrzebujesz
          lub chciałabyś spotkać się jeszcze raz, to umówimy się na kolejną
          sesję. Na konsultacjach będziesz mogła porozmawiać o tym, czym nie
          mogłaś lub nie chciałaś dzielić się z grupą. Wesprę Cię również w
          razie kryzysu - wywołanego przez czynniki zewnętrzne lub takim, który
          może się zdarzyć przez głębszą analizę przeszłości związanym z kursem.
        </p>
      </Section>

      <Section className="pt-6 max-w-prose">
        <FeaturesRow
          title={
            <>
              Co otrzymasz dołączając do kursu?
              <ShortDivider my={'my-1'} />
            </>
          }
          features={[
            '8 nagrań video podzielonych na 2 moduły kursowe',
            'Dwugodzinne warsztaty',
            '2 spotkania na żywo podsumowujące moduły i sprawdzające postępy',
            'Spotkanie na zoomie 2 miesiące po zakończeniu kursu podczas którego sprawdzimy czy udaje się realizować cele, dostaniesz kolejną dawkę motywacji i ustalisz plan działania na dalszą drogę po zakończeniu kursu.',
            '2 konsultacje 1:1',
            'Nagranie webinaru “granice w relacjach”',
            '70-stronnicowy workbook',
            'Bezterminowy dostęp do zamkniętej grupy na facebooku i moje merytoryczne wsparcie przez cały okres trwania kursu',
            'Dostęp do materiałów na dwa lata',
          ]}
        />
      </Section>

      <Section
        className="py-6 max-w-prose"
        title={
          'Odkryj sprawdzone metody i narzędzia, które od razu wprowadzisz w życie i zmienisz swoją relację na lepsze!'
        }
      >
        <PricingCardRow
          className="mx-auto mb-8"
          features={[
            '8 nagrań video podzielonych na 2 moduły kursowe',
            'Dwugodzinne warsztaty',
            '2 spotkania na żywo podsumowujące moduły i sprawdzające postępy',
            'Spotkanie na zoomie 2 miesiące po zakończeniu kursu podczas którego sprawdzimy czy udaje się realizować cele, dostaniesz kolejną dawkę motywacji i ustalisz plan działania na dalszą drogę po zakończeniu kursu.',
            '2 konsultacje 1:1',
            'Nagranie webinaru “granice w relacjach”',
            '70-stronnicowy workbook',
            'Bezterminowy dostęp do zamkniętej grupy na facebooku i moje merytoryczne wsparcie przez cały okres trwania kursu',
            'Dostęp do materiałów na dwa lata',
          ]}
          price="359"
        />
        <TestimonialsRow
          testimonials={[
            {
              text: 'fdsfdsafds fdsfd saf dsfdsfdsafd s fds fdsaf dsfd sfdsafd sfd sf dsa fds',
              name: 'fdag',
              image: (
                <Image alt="" src={questionsImage2} height={20} width={20} />
              ),
            },
            {
              text: 'fdsfdsafds fdsfd saf dsfdsfdsafd s fds fdsaf dsfd sfdsafd sfd sf dsa fds',
              name: 'fdag',
              image: (
                <Image alt="" src={questionsImage2} height={20} width={20} />
              ),
            },
            {
              text: 'fdsfdsafds fdsfd saf dsfdsfdsafd s fds fdsaf dsfd sfdsafd sfd sf dsa fds',
              name: 'fdag',
              image: (
                <Image alt="" src={questionsImage2} height={20} width={20} />
              ),
            },
            {
              text: 'fdsfdsafds fdsfd saf dsfdsfdsafd s fds fdsaf dsfd sfdsafd sfd sf dsa fds',
              name: 'fdag',
              image: (
                <Image alt="" src={questionsImage2} height={20} width={20} />
              ),
            },
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
