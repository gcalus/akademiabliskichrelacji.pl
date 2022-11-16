/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";

import backgroundImage from "../../public/assets/images/header-jestem.png";
import logo from "../../public/assets/images/logo_new.png";
import { FooterCentered } from "../components/FooterCentered";
import { Meta } from "../components/Meta";
import { Section } from "../components/Section";
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

      <Section
        className="pt-6 bg-white"
        description={
          <div className="sm:px-6 max-w-[70ch] mx-auto">
            <div className="flex justify-center mb-8 md:mb-10 md:mt-3">
              <WyzwaniePricingButton onClick={scrollToPricing} />
            </div>
            <div className="space-y-2 text-center">
              <p className="text-3xl">
                Dołącz do trzeciej edycji wyzwania adwentowego &quot;Jestem dla
                Ciebie&quot;, sama lub z mężem!
              </p>
              <p className="italic">
                Przekonaj się, że wcale nie trzeba wiele, żeby w Twoim domu
                codziennie było pełno miłości, drobnych gestów i słów wsparcia.
              </p>
            </div>
          </div>
        }
      >
        <article className="whitespace-pre-wrap">
          {`Chciałabyś podnieść swoją relację w związku na wyższy poziom?

To może być na początek mały i prosty gest – przytulenie, słowo wdzięczności, ciepła herbata przyniesiona na kanapę. Czasami, w trudach codzienności (a szczególnie kiedy ma się małe dzieci), możemy zapomnieć o takich drobiazgach, których potrzebuje każdy związek. I właśnie to wyzwanie jest po to, żeby zmotywować Cię do wprowadzania takich małych gestów miłości każdego dnia! Możesz wzniecać ten ogień, małymi krokami i codziennie. Jestem pewna, że szybko zobaczysz efekty!

Czy kalendarz adwentowy może przychodzić na maila?

Tak! Każdego dnia od 1 do 24 grudnia otrzymasz ode mnie maila z krótkim zadaniem, którego wykonanie umili życie Twojemu mężowi/partnerowi. Zadania będą proste, trwające dosłownie chwilkę, ale zapewniam Cię, że efekty dawania bezinteresownej miłości pojawią się bardzo szybko.

Skąd to wiem?

Poprowadziłam już dwie edycje wyzwania adwentowego, w których wzięło udział już ponad 500 osób - zarówno kobiet jak i mężczyzn. Z relacji uczestników (i swoich własnych doświadczeń) mogę bez zawahania powiedzieć, że to działa!

Po kilku dniach od startu wyzwania uczestniczki pisały do mnie, że w ich domach zrobiło się przyjemniej, mężowie okazywali więcej miłości i czułości, byli bardziej chętni do współpracy.
Jedna osoba napisała nawet, że jej mąż zaczął zwracać się do niej tak czule, jak kiedyś – na początkowym etapie związku. Czytałam te wszystkie wiadomości ze wzruszeniem i takim poczuciem, że naprawdę nie trzeba wiele, żeby poprawić jakość swojego życia w związku!

Ale wiesz co? To wyzwanie tak naprawdę nie jest tylko po to, żeby zrobić miło parterom lub partnerkom, ale ono jest dla nas samych – dla żon, mężów, parterów lub partnerek. Chcę przez to pokazać, że każdego dnia, niezależnie od nastroju w domu, to właśnie my możemy wyjść do naszego męża czy z żony z miłością – bezinteresowną i szczerą. Bez oczekiwań, że on/ona tę miłość przyjmie.


Kim jestem?

Nazywam się Gosia Całus i jestem mentorką bliskich relacji. Uczę tego co zrobić, żeby podnieść swoje relacje na wyższy poziom i czerpać większą satysfakcję z bycia rodzicem, partnerem, czy żoną.
Pracuję z osobami, które pragną rozwinąć swoje umiejętności relacyjne i komunikacyjne i szukają rzetelnej i sprawdzonej wiedzy w tym temacie.

Czy wiesz, że dzięki udziałowi w wyzwaniu zadbasz aż o pięć z siedmiu zasad udanego małżeństwa według Johna Gottmana? To wybitny naukowiec badający funkcjonowanie małżeństwa i rodziny.

- zaktualizujesz mapę świata partnera (czyli dowiesz się więcej na jego temat)
- będziesz pielęgnować uczucie sympatii i podziwu dla partnera
- zwrócicie się ku sobie, zamiast odwracać się od siebie
- zaczniecie rozpoznawać sygnały partnera
- odnajdziecie poczucie wspólnoty


Dołącz sama lub w parze!

W zeszłym roku po raz pierwszy wyzwanie kierowałam również do mężczyzn i okazało się, że wiele par było zainteresowanych wspólnym udziałem. Sama robię wyzwanie razem z moim mężem i naprawdę uwielbiam ten czas!

Wysyłam różne maile w zależności od płci uczestnika - biorę pod uwagę dobór odpowiednich przykładów i zwracanie się do odbiorcy w formie żeńskiej lub męskiej.
Wyzwanie dla par zaprojektowałam w taki sposób, żebyście robili różne zadania każdego dnia :)


Dzięki wyzwaniu:

-   Dostaniesz motywację do codziennego robienia małych gestów dla swojego męża/żony
    
-   Poznasz pomysły na wspólne spędzanie czasu, które będziesz mogła później wiele razy wykorzystać
    
-   Wyrobisz sobie nawyk!
  Właśnie tak działa codzienne robienie zadań, że po jakimś czasie codzienne robienie miłych gestów dla partnera staje się nawykiem. Gwarantuję Ci, że po zakończeniu wyzwania  z większą łatwością będziesz przypominać sobie o tym, żeby po prostu zrobić coś bezinteresownie dla drugiej osoby.

- Przygotujesz się do tego, żeby spędzić święta w atmosferze miłości i spokoju
--

   
Jak wygląda przebieg wyzwania?

- Codziennie o 6:00 rano dostajesz na maila zadanie do wykonania i opis
    
-   Zadania są krótkie - trwają maksymalnie do kilku minut
    
-   Nie potrzebujesz żadnych specjalnie zakupionych rzeczy, żeby robić zadania
    
-   Możesz dołączyć do zamkniętej grupy na facebooku, na której uczestnicy wyzwania mogą dzielić się tym jak udało się wykonać zadanie. To kolejny kop motywacyjny, żeby nie odkładać czytania maili i robienia zadań na później!
-  W wersji wyzwania dla pary, każdy z partnerów dostaje tę samą pulę zadań, ale w różnej kolejności. Tylko w dwa dni robicie takie samo zadanie :) Sami przekonajcie się dlaczego!

KONIEC`}
        </article>
      </Section>

      {/* <Footer /> */}

      <Section className="py-6 bg-gray-100">
        <FooterCentered logo={"Śledź nas na social mediach:"} />
      </Section>
    </>
  );
};

export default Index;
