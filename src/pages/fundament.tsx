import { BookOpenIcon, PlayIcon, UsersIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

import image3 from "../../public/assets/images/1.jpg";
import womanImage2 from "../../public/assets/images/certificate-woman.png";
import womanImage from "../../public/assets/images/creative-woman.png";
import logo from "../../public/assets/images/cropped-logo.png";
import ideaImage from "../../public/assets/images/idea.png";
import image1 from "../../public/assets/images/kurs1.png";
import questionsImage2 from "../../public/assets/images/question4.png";
import questionsImage from "../../public/assets/images/questions2.png";
import { Accordion } from "../components/Accordion";
import { BigFeaturesRow } from "../components/BigFeaturesRow";
import { DescriptionWithImageRow } from "../components/DescriptionWithImageRow";
import { FancyIcon } from "../components/FancyIcon";
import { FeaturesWithImageRow } from "../components/FeaturesWithImageRow";
import { FooterCentered } from "../components/FooterCentered";
import { FundamentPricingButton } from "../components/FundamentPricingButton";
import { Meta } from "../components/Meta";
import { ParagraphRow } from "../components/ParagraphRow";
import { PricingCardRow } from "../components/PricingCardRow";
import { Section } from "../components/Section";
import { ShortDivider } from "../components/ShortDivider";
import { StickyBackground } from "../components/StickyBackground";
import { TestimonialsRow } from "../components/TestimonialsRow";
// import UsersIcon from "../icons/UsersIcon.svg";
import { AppConfig } from "../utils/AppConfig";
import useScrollTo from "../utils/useScrollTo";

const Index = () => {
  const [pricingRef, scrollToPricing] = useScrollTo<HTMLDivElement>();

  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />

      {/* <Hero /> */}

      <StickyBackground backgroundHeightSpacing={{ h: "h-96", top: "top-96" }}>
        <header className="max-w-screen-xl mx-auto px-6 py-3 drop-shadow-md h-full flex flex-col">
          <nav className="flex gap-4 justify-end items-center font-bold text-2xl">
            <Link href="/">
              <a className="rounded-md shadow-white shadow h-[100px]">
                <Image
                  src={logo}
                  alt={"logo"}
                  height={100}
                  className="rounded-md"
                />
              </a>
            </Link>
          </nav>
          <div className="text-3xl sm:text-5xl font-title font-bold whitespace-pre-line leading-hero text-center my-auto">
            <h1>{"Zbuduj solidny fundament relacji"}</h1>
            <h2 className="text-2xl sm:text-3xl text-center">
              {"Program mentoringowy"}
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
              <FundamentPricingButton onClick={scrollToPricing} />
            </div>
            <div className="italic text-purple-dark bg-purple-200/75 shadow-[0_0_20px_10px_rgb(233,213,255)] space-y-2">
              <p>
                Zacznij w pełni świadomie budować relację w swoim związku i
                wyznacz drogę, którą naprawdę chcesz podążać. Wyznacz realne
                cele, zadbaj o swoje granice, ustal normy, którymi chcesz żyć na
                co dzień.
              </p>
              <p>
                Dzięki udziałowi w programie otrzymasz wsparcie i motywację,
                które pomogą Ci ruszyć z miejsca. Dostaniesz sprawdzone metody i
                narzędzia, które od razu wprowadzisz w życie i zmienisz swoją
                relację na lepsze!
              </p>
            </div>
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
                      "invert(42%) sepia(7%) saturate(4430%) hue-rotate(264deg) brightness(79%) contrast(81%)",
                  }}
                >
                  <Image src={questionsImage} height={40} width={40} alt="" />
                </div>
                Czy:
              </div>
              <ShortDivider center my={"my-1"} />
            </>
          }
          narrowImage
          image={image1}
          punctor={
            <span
              style={{
                filter:
                  "invert(17%) sepia(52%) saturate(2355%) hue-rotate(271deg) brightness(92%) contrast(84%)",
              }}
            >
              <Image alt="" src={questionsImage2} height={20} width={20} />
            </span>
          }
          features={[
            "Nie potrafisz zapanować nad swoimi emocjami? Krzyczysz na bliskich i potem tego żałujesz?",
            "Masz poczucie, że kiedyś lepiej dogadywałaś się z partnerem, było między Wami więcej bliskości i nie kłóciliście się o mało ważne rzeczy?",
            "Nie wiesz jak skutecznie zareagować, kiedy partner na Ciebie krzyczy?",
            "Czujesz, że pracujesz nad sobą i próbujesz się zmieniać, ale nie przynosi to efektu i nie wiesz w którym iść kierunku?",
            "W emocjach wypowiadasz słowa, których później żałujesz?",
            "Zależy Ci na dobrej relacji z partnerem?",
            "Chciałabyś zacząć żyć wykorzystując w pełni swój potencjał jako kobieta i jako partnerka?",
          ]}
        />
      </Section>

      <Section
        className="pt-6"
        title={
          'Jeśli tak, to program mentoringowy "zbuduj solidny fundament relacji" pomoże Ci ruszyć z miejsca.'
        }
        description={
          "Dostaniesz niezbędną wiedzę do tego, żebyś mogła być szczęśliwa i spełniona w związku. Nauczysz się dbać o siebie i dostaniesz konkretne wskazówki i narzędzia jak dbać o swoje relacje!"
        }
      >
        <FeaturesWithImageRow
          reverse
          title={
            <>
              Co da ci ten program?
              <ShortDivider my={"my-1"} />
            </>
          }
          image={womanImage}
          punctor={
            <span
              style={{
                filter:
                  "invert(17%) sepia(52%) saturate(2355%) hue-rotate(271deg) brightness(92%) contrast(84%)",
              }}
            >
              <Image alt="" src={ideaImage} />
            </span>
          }
          features={[
            "Dowiesz się jak zmienić szkodliwe przekonania o budowaniu relacji w związku i schematy, które sprawiają, że stoisz w miejscu.",
            "Ustalisz swoje cele w relacji i dzięki nim będziesz mogła rozwijać się w kierunku w którym pragniesz! Niezależnie od tego, czy druga osoba w związku jest teraz gotowa na zmiany, czy nie.",
            "Odkryjesz swoje granice i nauczysz się co robić w sytuacjach, gdy ktoś je narusza.",
            "Nauczysz się dbać o siebie, swoje potrzeby i pragnienia! Dzięki temu będziesz miała więcej zasobów na dbanie o swoje relacje.",
            "Zobaczysz co zrobić, żeby zwiększyć swój poziom zadowolenia z życia i relacji.",
            "Dowiesz się jakie zachowania i myśli szkodzą Twojej relacji i będziesz mogła pozbyć się ich ze swojego życia.",
            "Nauczysz się wyznaczać priorytety w taki sposób, żeby mieć czas na najważniejsze dla Ciebie rzeczy.",
            'Odzyskasz swoją niezależność i zobaczysz, że to wcale nie oznacza życia z partnerem "obok siebie". Zobaczysz, że możesz być niezależna od partnera i jednocześnie żyć z nim w bliskiej relacji.',
            "Spojrzysz na swój związek z innej perspektywy. Dzięki dokładnemu zdaniu sobie sprawy z historii Twojej relacji, zmian które zaszły i tego w jakim punkcie się znajdujecie, będziesz mogła ustalić najlepszą strategię pracy nad sobą.",
          ]}
        />
      </Section>

      <Section className="pt-6">
        <DescriptionWithImageRow
          title={"Kim jestem?"}
          description={
            <div className="space-y-4">
              <p>
                Nazywam się Gosia Całus. 10 lat temu weszłam w stały związek,
                który szybko okazał się być daleki od moich oczekiwań. Swoją
                satysfakcję i szczęście opierałam na szkodliwych przekonaniach,
                które wydawały mi się wtedy być jedyną słuszną drogą. Kłótnie,
                oskarżanie, problemy z komunikacją i niezadowolenie stało się
                moją codziennością. Po narodzinach pierwszego dziecka zaczęłam
                gruntowną pracę nad przekonaniami, schematami i komunikacją, co
                w ciągu zaledwie kilku lat kompletnie odmieniło moje życie.
              </p>
              <p>
                <span className="font-bold">
                  Dziś jestem w zupełnie innym miejscu.
                </span>{" "}
                Buduję moją relację z mężem świadomie i z szacunkiem zarówno do
                siebie samej jak i niego. Odzyskałam moją sprawczość i nauczyłam
                się dbać o moje potrzeby i granice. Wiem, które schematy
                komunikacyjne i myślowe sprawiały, że zamiast relacji budowałam
                z moim mężem mur. Udało się go zburzyć i mogę pokazać Ci jak to
                zrobić!
              </p>
              <p>
                Prowadzę Akademię bliskich relacji, w której pokazuję jak
                budować relacje i komunikować się w rodzinie. Pomagam w
                zrozumieniu siebie samego i pokazuję jak bardzo codzienne
                relacje i komunikaty wpływają na jakość życia. Stworzyłam
                autorskie kursy i wyzwania rozwojowe o budowaniu dobrych relacji
                i rozwiązywaniu konfliktów, w których wzięło udział już ponad
                1000 osób! Mam na swoim koncie dziesiątki godzin konsultacji z
                zadowolonymi klientkami.
              </p>
              <p>
                Jestem muzykoterapeutką oraz certyfikowanym konsultantem
                kryzysowym, czyli osobą która udziela pierwszej pomocy
                psychologicznej ludziom w kryzysie.
              </p>
            </div>
          }
          image={image3}
          textRight
        />
      </Section>

      <div className="text-center py-6">
        <FundamentPricingButton onClick={scrollToPricing} />
      </div>

      <Section className="pt-6">
        <FeaturesWithImageRow
          reverse
          title={
            <>
              Ten program jest dla Ciebie jeśli:
              <ShortDivider my={"my-1"} />
            </>
          }
          image={womanImage2}
          punctor={<span className="text-purple-500">✔</span>}
          features={[
            "jesteś gotowa wziąć odpowiedzialność za swoją część relacji w związku",
            "chcesz poprawić komfort swojego życia i lepiej czuć się w swoim związku",
            "pragniesz odzyskać sprawczość w swoim życiu i związku",
            "próbujesz coś zmienić w swojej relacji, ale nie za bardzo wiesz za co się zabrać",
            "masz dosyć niektórych zachowań partnera, ale nie wiesz jak sprawić żeby przestał to robić",
            "chcesz zadbać nie tylko o relacje, ale też o samą siebie!",
          ]}
        />
      </Section>

      <Section
        className="pt-6 space-y-10"
        title={
          <p className="max-w-prose">
            Możesz dołączyć do kursu niezależnie od tego jaki masz staż w swoim
            związku.
          </p>
        }
        description={
          <p className="max-w-prose mx-auto">
            Tematy, które będę poruszać i problemy, nad którymi będziemy
            wspólnie pracować, są uniwersalne i fundamentalne do tego, żeby
            zbudować dobrą relację z partnerem! Możesz dołączyć do kursu
            niezależnie od Twojego stopnia zadowolenia z relacji. Pomogę Ci
            zmienić perspektywę i dam gotowe narzędzia do pracy.
          </p>
        }
      >
        <BigFeaturesRow
          title="Co otrzymasz dołączając do programu?"
          features={[
            {
              title: "Kurs “Zbuduj solidny fundament relacji” + workbook",
              image: (
                <FancyIcon>
                  <PlayIcon className="w-10 h-10 text-white" />
                </FancyIcon>
              ),
              feature:
                "Otrzymasz dostęp do platformy kursowej na której znajdziesz nagrania video do każdego  z dwóch modułów kursu (łącznie 8 video). Do kursu dołączony jest obszerny 70-stronicowy workbook, w którym znajdziesz ćwiczenia do każdej lekcji.",
            },
            {
              title:
                "Ebook “Jak dbać o relacje w rodzinie, żeby wszyscy domownicy czuli się dobrze?”",
              image: (
                <FancyIcon>
                  <BookOpenIcon className="w-10 h-10 text-white" />
                </FancyIcon>
              ),
              feature:
                "W ebooku omawiam najważniejsze relacje, które budujesz w swoim życiu. Zajmiemy się Twoją relację ze sobą, z mężem/partnerem i dziećmi (jeśli je masz). Dzięki odpowiednim narzędziom zawartym w ebooku uzyskasz wgląd w swoje relacje i niezaspokojone potrzeby oraz znajdziesz strategie na ich zaspokojenie. Cały ebook naładowany jest wiedzą, konkretami i przykładami.",
            },
            {
              title: "Spotkania 1:1 20-minutowe",
              image: (
                <FancyIcon>
                  <UsersIcon className="w-10 h-10 text-white" />
                </FancyIcon>
              ),
              feature:
                "Krótkie spotkania podczas których monitorujemy postępy pracy i omawiamy napotkane trudności. Z poprzedniej edycji programu wiem, że spotkania są bardzo motywujące do tego, żeby przerobić cały materiał kursowy i nie odkładać tego na później. ",
            },
            {
              title: "Konsultacje 1:1 45-minutowe",
              image: (
                <FancyIcon>
                  <UsersIcon className="w-10 h-10 text-white" />
                </FancyIcon>
              ),
              feature:
                "Podczas konsultacji zajmujemy się pracą nad tematami (przekonaniami, omawianiem schematów, itp.), które sprawiają klientce najwięcej trudności. Możemy pogłębiać tematy zawarte w kursie lub zająć się czymś innym, np. komunikacją. Zaproponuję temat, który wyda mi się najbardziej odpowiedni i wspólnie zdecydujemy co będziemy omawiać. Podczas konsultacji pracuję metodami mentoringowymi i warsztatowymi. ",
            },
            {
              title: "Dodatkowe materiały",
              image: (
                <FancyIcon>
                  <PlayIcon className="w-10 h-10 text-white" />
                </FancyIcon>
              ),
              feature:
                "W zależności od wybranego wariantu programu otrzymasz dostęp do dwóch sesji Q&A (z poprzednich edycji kursu) i dwóch webinarów: “Pięć błędów popełnianych w budowaniu relacji w związku” i “Granice w relacjach”. ",
            },
          ]}
        />
        <Accordion
          className="mx-auto max-w-prose"
          accordions={[
            {
              title:
                "Z czego składa się kurs “Zbuduj solidny fundament relacji”?",
              description: (
                <div className="space-y-4">
                  <div className="text-sm space-y-1">
                    <p className="text-lg">
                      <span className="font-semibold">
                        1 Moduł “Zobacz gdzie teraz jesteś”
                      </span>
                    </p>
                    <p className="text-base">
                      Moduł składa się z czterech lekcji w formie nagrań na
                      platformie kursowej.
                    </p>
                    <p>- Wróć do początku</p>
                    <p>- Zajrzyj w głąb siebie</p>
                    <p>- Naucz się dbać o siebie i wyrażać wdzięczność</p>
                    <p>- Przyjrzyj się temu jak teraz wygląda Twój związek </p>
                    <p>
                      W tym module dogłębnie przeskanujesz swoją relację z
                      partnerem, co jest niezbędne do dalszej świadomej pracy.
                      Nauczysz się wzmacniać relację z samą sobą i
                      skonfrontujesz się ze swoimi przekonaniami na temat dbania
                      o siebie. Dowiesz się co robić, żeby zaspokajać swoje
                      potrzeby i jak robić to efektywnie. Przyjrzysz się
                      dokładnie z jakiego punktu teraz startujesz i dostrzeżesz
                      obszary do zmiany.
                    </p>
                  </div>

                  <div className="text-sm space-y-1">
                    <p className="text-lg">
                      <span className="font-semibold">
                        2 moduł “Zacznij działać”
                      </span>
                    </p>
                    <p className="text-base">
                      Moduł składa się z czterech lekcji w formie nagrań na
                      platformie kursowej.
                    </p>
                    <p>- Ustal swój cel</p>
                    <p>- Ustal swoje normy i granice</p>
                    <p>- Pozbądź się szkodliwych wymagań</p>
                    <p>
                      - Odzyskaj swoją niezależność, nie odrzucając
                      współzależności
                    </p>
                    <p>
                      W tym module przejdziesz do konkretnego działania i zmian
                      swoich przekonań i zachowań, które szkodzą Twojej relacji.
                      Ustalisz cele, normy i granice, dzięki czemu odzyskasz
                      sprawczość w budowaniu swojej relacji. Dowiesz się,
                      dlaczego warto odrzucić niektóre wymagania i zastąpić je
                      normami. Przyjrzysz się temu jak działają Twoje granice i
                      uszczelnisz je w najbardziej kruchych miejscach. Zyskasz
                      również motywację do tego, żeby brać odpowiedzialność za
                      swoją część w relacji.
                    </p>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section className="pt-6 max-w-prose">
        <ParagraphRow
          title={
            <>
              Dlaczego ten program działa?
              <ShortDivider my={"my-1"} />
            </>
          }
        >
          <ul className="space-y-4 max-w-prose">
            <li>
              - Konkretna i sprawdzona wiedza
              <p className="ml-3 text-base leading-7">
                Podczas programu dzielę się tylko takimi metodami i narzędziami,
                które mam pewność, że zadziałają. Wiem, że Twój czas jest bardzo
                cenny, dlatego skupiam się na przekazywaniu samym konkretów,
                które są niezbędne do zmiany relacji na lepszą!
              </p>
            </li>
            <li>
              - Przykłady wzięte z życia
              <p className="ml-3 text-base leading-7">
                Najłatwiej zapamiętać i zrozumieć treści, jeśli można odnieść je
                do realnej sytuacji w swoim życiu. Dlatego w materiałach
                kursowych odnoszę się do różnych przykładów z życia, proponuję
                gotowe rozwiązania i dialogi np. Jak mówić o potrzebach i
                granicach.
              </p>
            </li>
            <li>
              - Motywacja i pomoc w zastosowaniu narzędzi
              <p className="ml-3 text-base leading-7">
                Dzięki spotkaniom 1:1 pomagam kursantkom zająć się
                najważniejszymi i najbardziej palącymi rzeczami, które wymagają
                zmiany. Regularne konsultacje dają dodatkową motywację do zmiany
                i wdrażania treści omawianych w programie.
              </p>
            </li>
          </ul>
        </ParagraphRow>
      </Section>

      <Section
        ref={pricingRef}
        className="pt-6"
        title={
          "Odkryj sprawdzone metody i narzędzia, które od razu wprowadzisz w życie i zmienisz swoją relację na lepsze!"
        }
      >
        <PricingCardRow
          className="mx-auto mb-8"
          features={[
            "Start kursu 30.05.2022",
            "8 nagrań video podzielonych na 2 moduły kursowe",
            "Dwugodzinne warsztaty",
            "2 spotkania na żywo podsumowujące moduły i sprawdzające postępy",
            "Spotkanie na zoomie 2 miesiące po zakończeniu kursu podczas którego sprawdzimy czy udaje się realizować cele, dostaniesz kolejną dawkę motywacji i ustalisz plan działania na dalszą drogę po zakończeniu kursu.",
            "2 konsultacje 1:1",
            "Nagranie webinaru “granice w relacjach”",
            "70-stronnicowy workbook",
            "Bezterminowy dostęp do zamkniętej grupy na facebooku i moje merytoryczne wsparcie przez cały okres trwania kursu",
            "Dostęp do materiałów na dwa lata",
          ]}
          price="379"
        />
      </Section>
      <h2 className="max-w-screen-xl text-center mx-auto px-3 text-4xl text-gray-900 font-bold">
        Opinie o poprzedniej edycji kursu:
      </h2>

      <TestimonialsRow
        testimonials={[
          {
            text: "Droga Gosiu, przerobiłam kurs i bardzo mi pomaga. Bardzo Ci dziękuję za wsparcie. Dziękuję, że mogłam do Ciebie napisać. Muszę przyznać, że praca nad tym co ja mogę zrobić daje mi dużo mocy sprawczej i energii. Ogromnym przełomem było dla mnie zdefiniowanie swoich potrzeb- o niektórych nie wiedziałam więc jak mogłam o nie dbać. Zadbanie o siebie w perspektywie nie urodowej ale np przez chwilę modlitwy czy czytania książki jest dla mnie zupełnie nowym odkryciem. Czuję się o niebo lepiej zadbana i zaopiekowana gdy dzięki Tobie sobie to zdefiniowałam i poukładałam. Wiesz, że gdy wypisałam sobie cele większość zależy ode mnie i od mojego działania. Wczoraj pierwszy raz od dłuższego czasu żartowałam z mężem. A wystarczyło tylko zapisać to w celach. Temat granic jest dla mnie bardzo istotny i od jakiegoś czasu nad nim pracuję- dla mnie bardzo ciekawe było to by zweryfikować które oczekiwania i wymagania są moje a które nabyłam w czasie dorastania. To prawda, że moja przyszłość zależy od moich działań widzę to. [...] Bardzo jestem wdzięczna za to że przygotowałaś ten kurs.",
            name: "Klaudia",
          },
          {
            text: "Uczestniczyłam w kursie bo zależy mi na budowaniu bliskich i trwałych relacji. Wiele rzeczy już wiem ale na kursie udało mi się uporządkować podstawy i zastanowić się na czym ja właściwie buduje swoje relacje. Kurs dawał do tego odpowiednie narzędzia i przede wszystkim opierał się na własnej pracy z myślami. Do każdego tematu były dołączone pytania i zadania, które pozwalały zastanowić się jak te treści wyglądają u mnie, jak mogę wprowadzić je w życie. To był też fajny czas w którym mogłam skupić się trochę na tym co przeżywam. Każdego dnia można było podzielić się swoimi przemyśleniami na grupie na Facebooku, to również było budujące i motywujące: zobaczyć że inni też mają trudności albo jak je przezwyciężają, że nie jesteśmy sami w tym co trudne. Kurs był przygotowany bardzo dobrze pod względem merytorycznym! Był też przygotowany bardzo pomysłowo i w taki sposób były poukładane i rozłożone treści, że nie czułam się przytłoczona tylko z ciekawością czekałam na kolejne lekcje. Jestem bardzo zadowolona i serdecznie polecam :)",
            name: "Kasia",
          },
          {
            text: "Kurs zbudowany bardzo konkretnie i bez lania wody. Pozwolił mi przystopować na chwilę i spojrzeć na swój związek z szerszej perspektywy. Zrozumiałam jak wiele rzeczy jeszcze jest do naprawy i jak dużo zależne jest ode mnie samej. Pomógł mi spojrzeć na męża łagodniejszym okiem. Świetne narzędzie do analizy relacji, które w dodatku jest tak skonstruowane, że na pewno będę do niego wracać.",
            name: "Adriana",
          },
          {
            text: "Kurs Gosi to był konkretny motywator do działania i przemyśleń dotyczących nie tylko relacji z partnerem, ale też ze samym sobą. Świetnym narzędziem jest workbook, który podsumowuje każdy dzień i pomaga jeszcze więcej wyciągnąć z kursu aniżeli samo słuchanie. Poza tym i do kursu i do workbook'a można wrócić po czasie i zobaczyć jakie postępy się zrobiło. Do tego przestrzeń w grupie, gdzie można dzielić się swoimi refleksjami z innymi, różnymi stażami kobietami, jest bardzo inspirująca i skłaniająca do przemyśleń. Dziękuję za ten czas.",
            name: "Maria",
          },
          {
            text: "Jestem bardzo wdzięczna, że wzięłam udział w kursie organizowanym przez Gosię. Wiedza, którą przerobiłyśmy na kursie pomaga ułożyć sobie w głowie wiele spraw, nie tylko jeśli chodzi o związek, ale przede wszystkim pomaga uświadomić, że jeśli same zadbamy o siebie, zmienimy szkodliwe myślenie o swoim Mężu, już samym tym możemy wiele zmienić w swoim związku. Mnóstwo trafnych wskazówek, świetny workbook, dodatkowy atut to możliwość dzielenia się przemyśleniami na grupie  mnie kurs bardzo pomógł  na pewno będę wrócę do kursu za jakiś czas. Dzięki Gosia :)",
            name: "Julia",
          },
          {
            text: "Dzięki za ten kurs, Gosia! Bardzo podobało mi się podzielenie go na dwa moduły, pierwszy bardziej nastawiony na obserwacje, a drugi na działanie. Myślę, że to wartościowe źródło wiedzy przedstawione bardzo przystępnie i zwięźle:) Dodatkowym atutem jest to, że można do niego wracać wielokrotnie, ponieważ dynamika związku stale się zmienia. Bardzo motywującym narzędziem był workbook, który skłania do spisania konkretnych myśli, dzięki czemu łatwiej sobie wszystko poukładać w głowie. Zdecydowanie polecam kobietom w każdym etapie związku!",
            name: "Karolina",
          },
          {
            text: "Ten kurs to był dla mnie jak złamanie źle zrośniętej kości. Miałam w sobie bunt i brak zrozumienia dla wiele spraw, co utrudniło mi udzielanie się w grupie. Jednak mimo tego i moich trudności udało mi się wyciągnąć z niego coś, co myślałam, że moim przypadku jest niemożliwe. Poza moimi błędami dostrzegłam, że po prostu kocham mojego męża, wierzę w to, że on mnie kocha i nawet gdy w mojej głowie rodzą się czarne scenariusze rozwodu słyszę (przysięgam, że wymawiane ze spokojem jaki słyszałam w Gosi głosie podczas kursu) „jesteśmy w tym razem”, „kocham go i chcę dla niego dobrze”, „on mnie kocha i chce dla mnie dobrze”. Dziękuję za to  Mam zamiar wrócić, bo wiem, że wiele tematów muszę rozkminić jeszcze raz, albo nawet od zera i trochę więcej czasu i uwagi im poświecić. Jestem bardzo wdzięczna, że jest taka opcja.",
            name: "Dorota",
          },
          {
            text: "Miałam wątpliwości czy zapisać się na kurs, ponieważ przeszłam już terapię dla par razem z mężem i każdy z nas przeszedł terapię indywidualną, więc miałam obawy czy dowiem się na kursie czegoś nowego, czy ten kurs w ogóle jest dla mnie. Bardzo się cieszę, że do niego dołączyłam! Pomimo, że nie dowiedziałam się na kursie żadnych całkiem nowych rzeczy i nie dokonałam rewolucyjnego odkrycia, jeśli chodzi o moją relację z mężem, to bardzo dobrze było przypomnieć sobie podstawy, które już kiedyś przerabialiśmy na terapii dla par, a o których w codziennym życiu łatwo zapomnieć oraz spojrzeć na niektóre sytuacje z innej perspektywy. Doceniłam bardzo jak dużą pracę wykonaliśmy z mężem do tej pory, wyznaczyłam sobie nowe cele i wiem nad czym chciałabym pracować w najbliższym czasie. Workbook jest do tego doskonałym narzędziem i chciałabym do niego wracać co jakiś czas.",
            name: "Martyna",
          },
        ]}
      />
      {/* <Footer /> */}

      <Section className="py-6 bg-gray-100">
        <FooterCentered logo={"Śledź nas na social mediach:"}></FooterCentered>
      </Section>
    </>
  );
};

export default Index;
