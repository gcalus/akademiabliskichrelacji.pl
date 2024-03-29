/* eslint-disable react/jsx-key */
import {
  CheckCircleIcon,
  HandIcon,
  MapIcon,
  PlayIcon,
  RssIcon,
  UserGroupIcon,
  UsersIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

import gosiaa from "../../public/assets/images/gosiaa.jpg";
import backgroundImage from "../../public/assets/images/header-jestem.png";
import ideaImage from "../../public/assets/images/idea.png";
import listyImage from "../../public/assets/images/listy.png";
import logo from "../../public/assets/images/logo_new.png";
import prezent from "../../public/assets/images/prezent.jpg";
import questionsImage from "../../public/assets/images/questions2.png";
import wparze from "../../public/assets/images/w-parze.jpg";
import wyzwanie from "../../public/assets/images/wyzwanie.png";
import { BigFeaturesRow } from "../components/BigFeaturesRow";
import { Button } from "../components/Button";
import { DescriptionWithImageRow } from "../components/DescriptionWithImageRow";
import { FancyIcon } from "../components/FancyIcon";
import { FeaturesWithImageRow } from "../components/FeaturesWithImageRow";
import { FooterCentered } from "../components/FooterCentered";
import { Meta } from "../components/Meta";
import { ParagraphRow } from "../components/ParagraphRow";
import { PricingCardRow } from "../components/PricingCardRow";
import { Section } from "../components/Section";
import { ShortDivider } from "../components/ShortDivider";
import { StickyBackground } from "../components/StickyBackground";
import { WyzwaniePricingButton } from "../components/WyzwaniePricingButton";
import { AppConfig } from "../utils/AppConfig";
import useScrollTo from "../utils/useScrollTo";

const Index = () => {
  const [pricingRef, scrollToPricing] = useScrollTo<HTMLDivElement>();

  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {/* <Hero /> */}
      <StickyBackground
        backgroundHeightSpacing={{ h: "h-96", top: "top-96" }}
        backgroundImage={backgroundImage}
        backdrop="bg-gray-700/30"
      >
        <header className="max-w-screen-xl mx-auto px-6 py-3 drop-shadow-md h-full flex flex-col">
          <nav className="flex gap-4 justify-end items-center font-bold text-2xl">
            <Link href="/">
              <a className="rounded-md shadow-white shadow h-[100px] w-[200px]">
                <Image
                  src={logo}
                  alt={"logo"}
                  height={100}
                  width={200}
                  className="rounded-md"
                />
              </a>
            </Link>
          </nav>
          <div className="text-3xl sm:text-5xl font-title font-bold whitespace-pre-line leading-hero text-center my-auto">
            <h1>{'Wyzwanie "Jestem dla ciebie"'}</h1>
            <h2 className="text-xl sm:text-2xl text-center">
              {"Drobne gesty, które zmieniają relacje"}
            </h2>
          </div>
        </header>
      </StickyBackground>
      <div className="flex justify-center mb-1 md:mb-8  mt-10">
        <WyzwaniePricingButton onClick={scrollToPricing} />
      </div>
      <Section
        className="pt-10 bg-white"
        title='Dołącz do trzeciej edycji wyzwania adwentowego "Jestem dla
        Ciebie", sama lub z mężem!'
        description={
          <p className="px-3 text-justify italic text-purple-dark bg-purple-200/75 shadow-[0_0_20px_10px_rgb(233,213,255)] space-y-2">
            Przekonaj się, że wcale nie trzeba wiele, żeby w Twoim domu
            codziennie było pełno miłości, drobnych gestów i słów wsparcia.
          </p>
        }
      >
        <DescriptionWithImageRow
          image={prezent}
          title="Chciałabyś podnieść swoją relację w związku na wyższy poziom?"
          description={
            <span>
              To może być na początek mały i prosty gest – przytulenie, słowo
              wdzięczności, ciepła herbata przyniesiona na kanapę. Czasami, w
              trudach codzienności (a szczególnie kiedy ma się małe dzieci),
              możemy zapomnieć o takich drobiazgach, których potrzebuje każdy
              związek.{" "}
              <span className="font-semibold">
                I właśnie to wyzwanie jest po to, żeby zmotywować Cię do
                wprowadzania takich małych gestów miłości każdego dnia!
              </span>{" "}
              Możesz wzniecać ten ogień, małymi krokami i codziennie. Jestem
              pewna, że szybko zobaczysz efekty!
            </span>
          }
          textRight
        />
      </Section>
      <Section className="pt-16 pb-8">
        <ParagraphRow
          title={
            <>
              <div className="flex justify-center items-center gap-2">
                <div
                  style={{
                    filter:
                      "invert(42%) sepia(7%) saturate(4430%) hue-rotate(264deg) brightness(79%) contrast(81%)",
                  }}
                >
                  <Image src={questionsImage} height={40} width={40} alt="" />
                </div>
                Czy kalendarz adwentowy może przychodzić na maila?
              </div>
              <ShortDivider center my={"my-1"} />
            </>
          }
        >
          <div className="space-y-4 max-w-prose mx-auto">
            <p>
              Tak! Każdego dnia od 1 do 24 grudnia otrzymasz ode mnie maila z
              krótkim zadaniem, którego wykonanie umili życie Twojemu
              mężowi/partnerowi. Zadania będą proste, trwające dosłownie
              chwilkę, ale zapewniam Cię, że efekty dawania bezinteresownej
              miłości pojawią się bardzo szybko.
            </p>
            <p className="font-semibold">Skąd to wiem?</p>
            <p className="px-3 text-purple-dark bg-purple-200/75 shadow-[0_0_20px_10px_rgb(233,213,255)] space-y-2 text-justify">
              Poprowadziłam już dwie edycje wyzwania adwentowego, w których
              wzięło udział już{" "}
              <span className="font-semibold">ponad 500 osób</span> - zarówno
              kobiet jak i mężczyzn. Z relacji uczestników (i swoich własnych
              doświadczeń) mogę bez zawahania powiedzieć, że to działa!
            </p>
            <p>
              Po kilku dniach od startu wyzwania uczestniczki pisały do mnie, że{" "}
              <span className="font-semibold">
                w ich domach zrobiło się przyjemniej, mężowie okazywali więcej
                miłości i czułości, byli bardziej chętni do współpracy.
              </span>{" "}
              Jedna osoba napisała nawet, że jej mąż zaczął zwracać się do niej
              tak czule, jak kiedyś – na początkowym etapie związku. Czytałam te
              wszystkie wiadomości ze wzruszeniem i takim poczuciem, że naprawdę
              nie trzeba wiele, żeby poprawić jakość swojego życia w związku!
            </p>
            <p>
              Ale wiesz co? To wyzwanie tak naprawdę nie jest tylko po to, żeby
              zrobić miło parterom lub partnerkom, ale ono jest dla nas samych –
              dla żon, mężów, parterów lub partnerek. Chcę przez to pokazać, że
              każdego dnia, niezależnie od nastroju w domu, to właśnie my możemy
              wyjść do naszego męża czy z żony z miłością – bezinteresowną i
              szczerą. Bez oczekiwań, że on/ona tę miłość przyjmie.
            </p>
          </div>
        </ParagraphRow>
      </Section>
      <div className="flex justify-center mb-8">
        <WyzwaniePricingButton onClick={scrollToPricing} />
      </div>
      <Section className="pt-0">
        <DescriptionWithImageRow
          title="Kim jestem?"
          image={gosiaa}
          description="Nazywam się Gosia Całus i jestem mentorką bliskich relacji. Uczę tego co zrobić, żeby podnieść swoje relacje na wyższy poziom i czerpać większą satysfakcję z bycia rodzicem, partnerem, czy żoną.
Pracuję z osobami, które pragną rozwinąć swoje umiejętności relacyjne i komunikacyjne i szukają rzetelnej i sprawdzonej wiedzy w tym temacie."
          textRight
        />
      </Section>
      <Section className="pt-5">
        <div className="text-center">
          <BigFeaturesRow
            title={
              <>
                <p className="max-w-prose mx-auto">
                  Czy wiesz, że dzięki udziałowi w wyzwaniu zadbasz aż o pięć z
                  siedmiu zasad udanego małżeństwa według Johna Gottmana?
                </p>
                <p className="font-normal text-lg mt-2">
                  To wybitny naukowiec badający funkcjonowanie małżeństwa i
                  rodziny.
                </p>
              </>
            }
            features={[
              {
                title:
                  "1. zaktualizujesz mapę świata partnera (czyli dowiesz się więcej na jego temat)",
                image: (
                  <FancyIcon>
                    <MapIcon className="w-10 h-10 text-white" />
                  </FancyIcon>
                ),
                feature: "",
              },
              {
                title:
                  "2. będziesz pielęgnować uczucie sympatii i podziwu dla partnera",
                image: (
                  <FancyIcon>
                    <HandIcon className="w-10 h-10 text-white" />
                  </FancyIcon>
                ),
                feature: "",
              },
              {
                title:
                  "3. zwrócicie się ku sobie, zamiast odwracać się od siebie",
                image: (
                  <FancyIcon>
                    <UsersIcon className="w-10 h-10 text-white" />
                  </FancyIcon>
                ),
                feature: "",
              },
              {
                title: "4. zaczniecie rozpoznawać sygnały partnera",
                image: (
                  <FancyIcon>
                    <RssIcon className="w-10 h-10 text-white" />
                  </FancyIcon>
                ),
                feature: "",
              },
              {
                title: "5. odnajdziecie poczucie wspólnoty",
                image: (
                  <FancyIcon>
                    <UserGroupIcon className="w-10 h-10 text-white" />
                  </FancyIcon>
                ),
                feature: "",
              },
            ]}
          />
        </div>
      </Section>
      <Section className="py-10">
        <DescriptionWithImageRow
          image={wparze}
          title="Dołącz sama lub w parze!"
          description={
            <div className="space-y-4 max-w-prose mx-auto">
              <p>
                W zeszłym roku po raz pierwszy wyzwanie kierowałam również do
                mężczyzn i okazało się, że wiele par było zainteresowanych
                wspólnym udziałem. Sama robię wyzwanie razem z moim mężem i
                naprawdę uwielbiam ten czas!
              </p>
              <p>
                Wysyłam różne maile w zależności od płci uczestnika - biorę pod
                uwagę dobór odpowiednich przykładów i zwracanie się do odbiorcy
                w formie żeńskiej lub męskiej.
              </p>
              <p>
                Wyzwanie dla par zaprojektowałam w taki sposób, żebyście robili
                różne zadania każdego dnia :)
              </p>
            </div>
          }
          textRight
          reverse
        />
      </Section>
      <div className="flex justify-center mb-2">
        <WyzwaniePricingButton onClick={scrollToPricing} />
      </div>
      <Section className="pt-6 max-w-4xl mx-auto">
        <ParagraphRow
          title={
            <>
              Dzięki wyzwaniu:
              <ShortDivider my={"my-1"} />
            </>
          }
        >
          <ul className="space-y-4 max-w-prose">
            <li>
              <span
                style={{
                  filter:
                    "invert(17%) sepia(52%) saturate(2355%) hue-rotate(271deg) brightness(92%) contrast(84%)",
                }}
              >
                <Image alt="" src={ideaImage} />{" "}
              </span>
              Dostaniesz motywację do codziennego robienia małych gestów dla
              swojego męża/żony
            </li>
            <li>
              <span
                style={{
                  filter:
                    "invert(17%) sepia(52%) saturate(2355%) hue-rotate(271deg) brightness(92%) contrast(84%)",
                }}
              >
                <Image alt="" src={ideaImage} />{" "}
              </span>
              Poznasz pomysły na wspólne spędzanie czasu, które będziesz mogła
              później wiele razy wykorzystać
            </li>
            <li>
              <span
                style={{
                  filter:
                    "invert(17%) sepia(52%) saturate(2355%) hue-rotate(271deg) brightness(92%) contrast(84%)",
                }}
              >
                <Image alt="" src={ideaImage} />{" "}
              </span>
              Wyrobisz sobie nawyk!
              <p className="ml-3 text-base leading-7">
                Właśnie tak działa codzienne robienie zadań, że po jakimś czasie
                codzienne robienie miłych gestów dla partnera staje się
                nawykiem. Gwarantuję Ci, że po zakończeniu wyzwania z większą
                łatwością będziesz przypominać sobie o tym, żeby po prostu
                zrobić coś bezinteresownie dla drugiej osoby.
              </p>
            </li>
            <li>
              <span
                style={{
                  filter:
                    "invert(17%) sepia(52%) saturate(2355%) hue-rotate(271deg) brightness(92%) contrast(84%)",
                }}
              >
                <Image alt="" src={ideaImage} />{" "}
              </span>
              Przygotujesz się do tego, żeby spędzić święta w atmosferze miłości
              i spokoju
            </li>
          </ul>
        </ParagraphRow>
      </Section>
      <Section className="pt-10">
        <FeaturesWithImageRow
          title="Jak wygląda przebieg wyzwania?"
          image={wyzwanie}
          punctor={<span className="text-purple-500">✔</span>}
          features={[
            "Codziennie o 6:00 rano dostajesz na maila zadanie do wykonania i opis",
            "Zadania są krótkie - trwają maksymalnie do kilku minut",
            "Nie potrzebujesz żadnych specjalnie zakupionych rzeczy, żeby robić zadania",
            "Możesz dołączyć do zamkniętej grupy na facebooku, na której uczestnicy wyzwania mogą dzielić się tym jak udało się wykonać zadanie. To kolejny kop motywacyjny, żeby nie odkładać czytania maili i robienia zadań na później!",
            "W wersji wyzwania dla pary, każdy z partnerów dostaje tę samą pulę zadań, ale w różnej kolejności. Tylko w dwa dni robicie takie samo zadanie :) Sami przekonajcie się dlaczego!",
          ]}
          narrowImage
        />
      </Section>

      <div ref={pricingRef} />
      <PricingCardRow
        className="mx-auto mb-8 pt-6"
        ctaText="Dołącz do wyzwania"
        ctaLinks={[
          "https://sklep.gosiacalus.pl/produkt/wyzwanie-adwentowe-jestem-dla-ciebie-2022/",
          "https://sklep.gosiacalus.pl/produkt/wyzwanie-jestem-dla-ciebie-dla-pary-kopia/",
        ]}
        cards={[
          {
            title: "Wyzwanie adwentowe „Jestem dla Ciebie” 2022",
            features: [
              [
                <CheckCircleIcon className="-ml-[6px] flex-shrink-0 w-5 h-5 text-purple-400" />,
                "24 inspirujące maile z pomysłami na miłe gesty w związku",
              ],
              [
                <CheckCircleIcon className="-ml-[6px] flex-shrink-0 w-5 h-5 text-purple-400" />,
                "dostęp do zamkniętej grupy na facebooku, na której motywujemy się do robienia zadań",
              ],
            ],
            price: "44,90",
          },
          {
            title: "Wyzwanie adwentowe „Jestem dla Ciebie” 2022 dla pary",
            features: [
              [
                <CheckCircleIcon className="-ml-[6px] flex-shrink-0 w-5 h-5 text-purple-400" />,
                "24 inspirujące maile, wysyłane w różnej kolejności na dwa adresy mailowe",
              ],
              [
                <CheckCircleIcon className="-ml-[6px] flex-shrink-0 w-5 h-5 text-purple-400" />,
                "dostęp do zamkniętej grupy na facebooku, na której motywujemy się do robienia zadań (osobna dla mężczyzn i kobiet)",
              ],
            ],
            price: "79,90",
          },
        ]}
      >
        Dołącz do wyzwania:
      </PricingCardRow>
      <Section>
        <DescriptionWithImageRow
          title={"Newsletter"}
          description={
            <>
              <p className="mb-4">
                Od sierpnia 2021 prowadzę systematyczną wysyłkę „listu do domu”,
                czyli newslettera o dbaniu o relacje i komunikacje w rodzinie,
                który czyta kilkaset osób. To jedyny newsletter w całym
                internecie, który bierze pod uwagę zarówno relację z mężem jak i
                z dziećmi!
              </p>
              <p>
                Dołącz do newslettera, żeby otrzymać darmowego ebooka, w którym
                przeczytasz aż 3 odcinki serialu o komunikacji!
              </p>
            </>
          }
          image={listyImage}
        >
          <div className="whitespace-nowrap mt-3">
            <Link href="https://gosiacalus.pl/newsletter/">
              <a>
                <Button variant="outlined">Zapisz się na newsletter</Button>
              </a>
            </Link>
          </div>
        </DescriptionWithImageRow>
      </Section>
      {/* <Footer /> */}
      <FooterCentered logo={"Śledź nas na social mediach:"} />
    </>
  );
};

export default Index;
