import Image from 'next/image';
import Link from 'next/link';

import image3 from '../../public/assets/images/1.jpg';
import womanImage2 from '../../public/assets/images/certificate-woman.png';
import womanImage from '../../public/assets/images/creative-woman.png';
import ideaImage from '../../public/assets/images/idea.png';
import image1 from '../../public/assets/images/kurs1.png';
import logo from '../../public/assets/images/logo.png';
import questionsImage2 from '../../public/assets/images/question4.png';
import questionsImage from '../../public/assets/images/questions2.png';
import { Accordion } from '../components/Accordion';
import { BigFeaturesRow } from '../components/BigFeaturesRow';
import { DescriptionWithImageRow } from '../components/DescriptionWithImageRow';
import { FeaturesRow } from '../components/FeaturesRow';
import { FeaturesWithImageRow } from '../components/FeaturesWithImageRow';
import { FooterCentered } from '../components/FooterCentered';
import { FundamentButton } from '../components/FundamentButton';
import { GroupIcon } from '../components/GroupIcon';
import { Meta } from '../components/Meta';
import { PricingCardRow } from '../components/PricingCardRow';
import { Section } from '../components/Section';
import { ShortDivider } from '../components/ShortDivider';
import { StickyBackground } from '../components/StickyBackground';
import { TestimonialsRow } from '../components/TestimonialsRow';
import { UserIcon } from '../components/UserIcon';
import { UsersIcon } from '../components/UsersIcon';
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
            <p className="italic text-purple-dark bg-purple-200/75 shadow-[0_0_20px_10px_rgb(233,213,255)]">
              Zacznij w pe??ni ??wiadomie budowa?? swoj?? relacj?? w zwi??zku i
              wyznacz drog??, kt??r?? naprawd?? Ty chcesz pod????a??. Dzi??ki 3
              miesi??cznej pracy ze mn?? oraz w ma??ej grupie kobiet, wyznaczysz
              realne cele, zadbasz o swoje granice, ustalisz normy, kt??rymi
              chcesz ??y?? na co dzie??. Otrzymasz wsparcie i motywacj??, kt??re
              pomog?? Ci ruszy?? z miejsca!
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
            'Masz poczucie, ??e kiedy?? lepiej dogadywa??a?? si?? z partnerem, by??o mi??dzy Wami wi??cej blisko??ci i nie k????cili??cie si?? o ma??o wa??ne rzeczy?',
            'Nie wiesz jak zareagowa??, kiedy Twoje granice s?? przekraczane?',
            'Czujesz, ??e pracujesz nad sob?? i pr??bujesz si?? zmienia??, ale ca??y czas stoisz w miejscu i nie wiesz w kt??rym i???? kierunku?',
            'Chcia??aby?? wzi???? ??ycie w swoje r??ce i zacz???? ??y?? wykorzystuj??c w pe??ni sw??j potencja?? jako kobieta i jako partnerka?',
            'Jeste?? zm??czona ci??g??ym niedogadywaniem si?? z partnerem i nier??wno??ciami w zwi??zku?',
            'Zwi??zek to dla Ciebie wa??ny obszar w ??yciu, ale nie czujesz si?? w nim tak spe??niona jakby?? chcia??a?',
          ]}
        />
      </Section>

      <Section
        className="pt-6"
        title={
          'Je??li tak, to program mentoringowy "zbuduj solidny fundament relacji" pomo??e Ci ruszy?? z miejsca!'
        }
        description={
          'Dostaniesz niezb??dn?? wiedz?? do tego, ??eby?? mog??a by?? szcz????liwa i spe??niona w zwi??zku. Nauczysz si?? dba?? o siebie i dostaniesz konkretne wskaz??wki i narz??dzia jak dba?? o swoje relacje!'
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
            'Ustalisz swoje cele w relacji i dzi??ki nim b??dziesz mog??a rozwija?? si?? w kierunku w kt??rym pragniesz! Niezale??nie od tego, czy druga osoba w zwi??zku jest teraz gotowa na zmiany, czy nie.',
            'Odkryjesz swoje granice i nauczysz si?? co robi?? w sytuacjach, gdy kto?? je narusza.',
            'Nauczysz si?? dba?? o siebie, swoje potrzeby i pragnienia! Dzi??ki temu b??dziesz mia??a wi??cej zasob??w na dbanie o swoje relacje.',
            'Zobaczysz, co zrobi?? ??eby zwi??kszy?? sw??j poziom zadowolenia z ??ycia i relacji.',
            'Dowiesz si??, jakie zachowania i my??li szkodz?? Twojej relacji i b??dziesz mog??a pozby?? si?? ich ze swojego ??ycia.',
            'Odzyskasz swoj?? niezale??no???? i zobaczysz, ??e to wcale nie oznacza ??ycia "obok siebie". Zobaczysz, ??e mo??esz by?? niezale??na od partnera i jednocze??nie ??y?? z nim w bliskiej relacji.',
            'Spojrzysz na sw??j zwi??zek z innej perspektywy. Dzi??ki dok??adnemu zdaniu sobie sprawy z historii Twojej relacji, zmian kt??re zasz??y i tego w jakim punkcie si?? znajdujecie, b??dziesz mog??a ustali?? najlepsz?? strategi?? pracy nad sob??.',
            'Odzyskasz swoj?? sprawczo????!',
          ]}
        />
      </Section>

      <Section className="pt-6">
        <DescriptionWithImageRow
          title={'Kim jestem?'}
          description={
            <div className="space-y-4">
              <p>
                Nazywam si?? Gosia Ca??us. 9 lat temu wesz??am w sta??y zwi??zek,
                kt??ry szybko okaza?? si?? by?? daleki od moich oczekiwa??. Swoj??
                satysfakcj?? i szcz????cie opiera??am na szkodliwych przekonaniach,
                kt??re wydawa??y mi si?? wtedy by?? jedyn?? s??uszn?? drog??. K????tnie,
                oskar??anie, problemy z komunikacj?? i niezadowolenie sta??o si??
                moj?? codzienno??ci??. Po narodzinach pierwszego dziecka zacz????am
                gruntown?? prac?? nad przekonaniami, schematami i komunikacj??, co
                w ci??gu zaledwie kilku lat kompletnie odmieni??o moje ??ycie.
              </p>
              <p>
                <span className="font-bold">
                  Dzi?? jestem w zupe??nie innym miejscu.
                </span>{' '}
                Buduj?? moj?? relacj?? z m????em ??wiadomie i z szacunkiem zar??wno do
                siebie samej jak i niego. Odzyska??am moj?? sprawczo???? i nauczy??am
                si?? dba?? o moje potrzeby i granice. Wiem, kt??re schematy
                komunikacyjne i my??lowe sprawia??y, ??e zamiast relacji budowa??am
                z moim m????em mur. Uda??o si?? go zburzy?? i mog?? pokaza?? Ci jak to
                zrobi??!
              </p>
              <p>
                Prowadz?? Akademi?? bliskich relacji, w kt??rej pokazuj?? jak
                budowa?? relacje i komunikowa?? si?? w rodzinie. Pomagam w
                zrozumieniu siebie samego i pokazuj?? jak bardzo codzienne
                relacje i komunikaty wp??ywaj?? na jako???? ??ycia. Stworzy??am
                autorskie kursy i wyzwania rozwojowe o budowaniu dobrych relacji
                i rozwi??zywaniu konflikt??w, w kt??rych wzi????o udzia?? ju?? prawie
                1000 os??b! Jestem w trakcie certyfikacji na konsultanta
                kryzysowego, czyli osoby kt??ra udziela pierwszej pomocy
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
              Ten program jest dla Ciebie je??li:
              <ShortDivider my={'my-1'} />
            </>
          }
          image={womanImage2}
          punctor={<span className="text-purple-500">???</span>}
          features={[
            'jeste?? gotowa wzi???? odpowiedzialno???? za swoj?? cz?????? relacji w zwi??zku',
            'chcesz poprawi?? komfort swojego ??ycia i lepiej czu?? si?? w swoim zwi??zku',
            'pr??bujesz co?? zmieni?? w swojej relacji, ale nie za bardzo wiesz za co si?? zabra??',
            'masz dosy?? niekt??rych zachowa?? partnera, ale nie wiesz jak sprawi?? ??eby przesta?? to robi??',
            'chcesz zadba?? nie tylko o relacje, ale te?? o sam?? siebie!',
          ]}
        />
      </Section>

      <Section
        className="pt-6 space-y-10"
        title={
          <p className="max-w-prose">
            Mo??esz do????czy?? do kursu niezale??nie od tego jaki masz sta?? w swoim
            zwi??zku.
          </p>
        }
        description={
          <p className="max-w-prose mx-auto">
            Tematy, kt??re b??d?? porusza?? i problemy, nad kt??rymi b??dziemy
            wsp??lnie pracowa??, s?? uniwersalne i fundamentalne do tego, ??eby
            zbudowa?? dobr?? relacj?? z partnerem! Mo??esz do????czy?? do kursu
            niezale??nie od Twojego stopnia zadowolenia z relacji. Pomog?? Ci
            zmieni?? perspektyw?? i dam gotowe narz??dzia do pracy.
          </p>
        }
      >
        <BigFeaturesRow
          title="Jak wygl??da praca w kursie?"
          features={[
            {
              title: 'Praca indywidualna',
              image: <UserIcon />,
              feature:
                'Otrzymasz dwuletni dost??p do platformy kursowej na kt??rej znajdziesz nagrania video do ka??dego modu??u kursu (8 video). Do kursu do????czony jest obszerny 70-stronnicowy workbook, w kt??rym znajdziesz ??wiczenia do ka??dej lekcji.',
            },
            {
              title: 'Praca w grupie',
              image: <GroupIcon />,
              feature:
                'Dostaniesz dost??p do zamkni??tej grupy na facebooku, w kt??rej b??d?? tylko uczestniczki kursu. Dodatkowo wszystkie spotkania na zoomie b??d?? odbywa?? si?? w tej samej grupie kobiet, dzi??ki czemu uda nam si?? nawi??za?? bli??szy kontakt. Grupa jest po to, ??eby wzajemnie si?? wspiera?? i motywowa??!',
            },
            {
              title: 'Praca 1:1 ze mn??',
              image: <UsersIcon />,
              feature:
                'Po przerobieniu materia????w kursowych b??dziesz mog??a um??wi?? si?? ze mn?? na 45-minutow?? indywidualn?? konsultacj??. Je??li uznasz, ??e potrzebujesz lub chcia??aby?? spotka?? si?? jeszcze raz, to um??wimy si?? na kolejn?? sesj??. Na konsultacjach b??dziesz mog??a porozmawia?? o tym, czym nie mog??a?? lub nie chcia??a?? dzieli?? si?? z grup??. Wespr?? Ci?? r??wnie?? w razie kryzysu - wywo??anego przez czynniki zewn??trzne lub takim, kt??ry mo??e si?? zdarzy?? przez g????bsz?? analiz?? przesz??o??ci zwi??zanym z kursem.',
            },
          ]}
        />
        <Accordion
          accordions={[
            {
              title: 'Zobacz harmonogram i tematy spotka?? w programie',
              description: (
                <div className="space-y-4">
                  <p className="text-slate-400">
                    Na czerwono zaznaczono przybli??ony harmonogram sesji.
                    Poszczeg??lne terminy mog?? ulec przesuni??ciom za zgod??
                    wszystkich uczestniczek.
                  </p>
                  <div className="text-sm space-y-1">
                    <p className="text-lg">
                      <span className="text-red-400">30.05.2022</span> -
                      <span className="font-semibold"> Wprowadzenie</span>
                    </p>
                    <p className="text-base">2-godzinny grupowy warsztat. </p>
                    <p>- Zapoznasz si?? z innymi uczestniczkami.</p>
                    <p>
                      - Ods??uchasz i b??dziesz mog??a wzi???? udzia?? w dyskusji na
                      temat cz????ci merytorycznej warsztatu &ldquo;5 b????d??w
                      pope??nianych w relacjach zwi??zku + jak mo??na je
                      naprawi??&ldquo;
                    </p>
                    <p>
                      - Okre??lisz swoje cele, kt??re chcesz osi??gn???? w programie
                      i rzeczy nad kt??rymi chcesz pracowa??.
                    </p>
                  </div>

                  <div className="text-sm space-y-1">
                    <p className="text-lg">
                      <span className="text-red-400">31.05-3.06</span> -{' '}
                      <span className="font-semibold">
                        {' '}
                        1 Modu?? ???Zobacz gdzie teraz jeste?????
                      </span>
                    </p>
                    <p className="text-base">
                      Modu?? sk??ada si?? z czterech lekcji w formie nagra?? na
                      platformie kursowej.
                    </p>
                    <p>- Wr???? do pocz??tku</p>
                    <p>- Zajrzyj w g????b siebie</p>
                    <p>- Naucz si?? dba?? o siebie i wyra??a?? wdzi??czno????</p>
                    <p>- Przyjrzyj si?? temu jak teraz wygl??da Tw??j zwi??zek </p>
                    <p>
                      W tym module dog????bnie przeskanujesz swoj?? relacj?? z
                      partnerem co jest niezb??dne do dalszej ??wiadomej pracy.
                      Nauczy si?? wzmacnia?? relacj?? z sam?? sob?? i skonfrontujesz
                      si?? ze swoimi przekonaniami na temat dbania o siebie.
                      Dowiesz si?? co robi??, ??eby zaspokaja?? swoje potrzeby i jak
                      robi?? to efektywnie. Przyjrzysz si?? dok??adnie z jakiego
                      punktu teraz startujesz i dostrze??esz obszary do zmiany.
                    </p>
                  </div>

                  <div className="text-sm space-y-1">
                    <p className="text-lg">
                      <span className="text-red-400">6.06.2022</span> -
                      <span className="font-semibold">
                        {' '}
                        Spotkanie podsumowuj??ce pierwszy modu?? kursu.
                      </span>
                    </p>
                  </div>

                  <div className="text-sm space-y-1">
                    <p className="text-lg">
                      <span className="text-red-400">7-10.06.2022</span> -{' '}
                      <span className="font-semibold">
                        {' '}
                        2 modu?? ???Zacznij dzia??a?????
                      </span>
                    </p>
                    <p className="text-base">
                      Modu?? sk??ada si?? z czterech lekcji w formie nagra?? na
                      platformie kursowej.
                    </p>
                    <p>- Ustal sw??j cel</p>
                    <p>- Ustal swoje normy i granice</p>
                    <p>- Pozb??d?? si?? szkodliwych wymaga??</p>
                    <p>
                      - Odzyskaj swoj?? niezale??no????, nie odrzucaj??c
                      wsp????zale??no??ci
                    </p>
                    <p>
                      W tym module przejdziesz do konkretnego dzia??ania i zmian
                      swoich przekona?? i zachowa??, kt??re szkodz?? Twojej relacji.
                      Ustalisz cele, normy i granice, dzi??ki czemu odzyskasz
                      sprawczo???? w budowaniu swojej relacji. Dowiesz si??,
                      dlaczego warto odrzuci?? niekt??re wymagania i zast??pi?? je
                      normami. Przyjrzysz si?? temu jak dzia??aj?? Twoje granice i
                      uszczelnisz je w najbardziej kruchych miejscach. Zyskasz
                      r??wnie?? motywacj?? do tego, ??eby bra?? odpowiedzialno???? za
                      swoj?? cz?????? w relacji.
                    </p>
                  </div>

                  <div className="text-sm">
                    <p className="text-lg">
                      <span className="text-red-400">13.06.2022</span> -
                      <span className="font-semibold">
                        {' '}
                        Spotkanie podsumowuj??ce drugi modu?? kursu.
                      </span>
                    </p>
                    <p className="text-base">
                      Od 13.06 do 13.08 b??dzie mo??na um??wi?? si?? na konsultacj??
                      1:1 ze mn??. Po pierwszej konsultacji zdecydujemy wsp??lnie,
                      czy warto jest si?? spotka?? drugi raz.
                    </p>
                  </div>

                  <div className="text-sm">
                    <p className="text-lg">
                      <span className="text-red-400">15.08.2022</span> -
                      <span className="font-semibold">
                        {' '}
                        Spotkanie podsumowuj??ce.
                      </span>
                    </p>
                    <p className="text-base">
                      Spotkanie na zoomie, podczas kt??rego sprawdzimy czy udaje
                      si?? realizowa?? cele. Dostaniesz kolejn?? dawk?? motywacji i
                      ustalisz plan dzia??ania na dalsz?? drog?? po zako??czeniu
                      kursu.
                    </p>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section className="pt-6 max-w-prose">
        <FeaturesRow
          title={
            <>
              Co otrzymasz do????czaj??c do kursu?
              <ShortDivider my={'my-1'} />
            </>
          }
          features={[
            '8 nagra?? video podzielonych na 2 modu??y kursowe',
            'Dwugodzinne warsztaty',
            '2 spotkania na ??ywo podsumowuj??ce modu??y i sprawdzaj??ce post??py',
            'Spotkanie na zoomie 2 miesi??ce po zako??czeniu kursu podczas kt??rego sprawdzimy czy udaje si?? realizowa?? cele, dostaniesz kolejn?? dawk?? motywacji i ustalisz plan dzia??ania na dalsz?? drog?? po zako??czeniu kursu.',
            '2 konsultacje 1:1',
            'Nagranie webinaru ???granice w relacjach???',
            '70-stronnicowy workbook',
            'Bezterminowy dost??p do zamkni??tej grupy na facebooku i moje merytoryczne wsparcie przez ca??y okres trwania kursu',
            'Dost??p do materia????w na dwa lata',
          ]}
        />
      </Section>

      <Section
        className="pt-6"
        title={
          'Odkryj sprawdzone metody i narz??dzia, kt??re od razu wprowadzisz w ??ycie i zmienisz swoj?? relacj?? na lepsze!'
        }
      >
        <PricingCardRow
          className="mx-auto mb-8"
          features={[
            'Start kursu 30.05.2022',
            '8 nagra?? video podzielonych na 2 modu??y kursowe',
            'Dwugodzinne warsztaty',
            '2 spotkania na ??ywo podsumowuj??ce modu??y i sprawdzaj??ce post??py',
            'Spotkanie na zoomie 2 miesi??ce po zako??czeniu kursu podczas kt??rego sprawdzimy czy udaje si?? realizowa?? cele, dostaniesz kolejn?? dawk?? motywacji i ustalisz plan dzia??ania na dalsz?? drog?? po zako??czeniu kursu.',
            '2 konsultacje 1:1',
            'Nagranie webinaru ???granice w relacjach???',
            '70-stronnicowy workbook',
            'Bezterminowy dost??p do zamkni??tej grupy na facebooku i moje merytoryczne wsparcie przez ca??y okres trwania kursu',
            'Dost??p do materia????w na dwa lata',
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
            text: 'Droga Gosiu, przerobi??am kurs i bardzo mi pomaga. Bardzo Ci dzi??kuj?? za wsparcie. Dzi??kuj??, ??e mog??am do Ciebie napisa??. Musz?? przyzna??, ??e praca nad tym co ja mog?? zrobi?? daje mi du??o mocy sprawczej i energii. Ogromnym prze??omem by??o dla mnie zdefiniowanie swoich potrzeb- o niekt??rych nie wiedzia??am wi??c jak mog??am o nie dba??. Zadbanie o siebie w perspektywie nie urodowej ale np przez chwil?? modlitwy czy czytania ksi????ki jest dla mnie zupe??nie nowym odkryciem. Czuj?? si?? o niebo lepiej zadbana i zaopiekowana gdy dzi??ki Tobie sobie to zdefiniowa??am i pouk??ada??am. Wiesz, ??e gdy wypisa??am sobie cele wi??kszo???? zale??y ode mnie i od mojego dzia??ania. Wczoraj pierwszy raz od d??u??szego czasu ??artowa??am z m????em. A wystarczy??o tylko zapisa?? to w celach. Temat granic jest dla mnie bardzo istotny i od jakiego?? czasu nad nim pracuj??- dla mnie bardzo ciekawe by??o to by zweryfikowa?? kt??re oczekiwania i wymagania s?? moje a kt??re naby??am w czasie dorastania. To prawda, ??e moja przysz??o???? zale??y od moich dzia??a?? widz?? to. [...] Bardzo jestem wdzi??czna za to ??e przygotowa??a?? ten kurs.',
            name: 'Klaudia',
          },
          {
            text: 'Uczestniczy??am w kursie bo zale??y mi na budowaniu bliskich i trwa??ych relacji. Wiele rzeczy ju?? wiem ale na kursie uda??o mi si?? uporz??dkowa?? podstawy i zastanowi?? si?? na czym ja w??a??ciwie buduje swoje relacje. Kurs dawa?? do tego odpowiednie narz??dzia i przede wszystkim opiera?? si?? na w??asnej pracy z my??lami. Do ka??dego tematu by??y do????czone pytania i zadania, kt??re pozwala??y zastanowi?? si?? jak te tre??ci wygl??daj?? u mnie, jak mog?? wprowadzi?? je w ??ycie. To by?? te?? fajny czas w kt??rym mog??am skupi?? si?? troch?? na tym co prze??ywam. Ka??dego dnia mo??na by??o podzieli?? si?? swoimi przemy??leniami na grupie na Facebooku, to r??wnie?? by??o buduj??ce i motywuj??ce: zobaczy?? ??e inni te?? maj?? trudno??ci albo jak je przezwyci????aj??, ??e nie jeste??my sami w tym co trudne. Kurs by?? przygotowany bardzo dobrze pod wzgl??dem merytorycznym! By?? te?? przygotowany bardzo pomys??owo i w taki spos??b by??y pouk??adane i roz??o??one tre??ci, ??e nie czu??am si?? przyt??oczona tylko z ciekawo??ci?? czeka??am na kolejne lekcje. Jestem bardzo zadowolona i serdecznie polecam :)',
            name: 'Kasia',
          },
          {
            text: 'Kurs zbudowany bardzo konkretnie i bez lania wody. Pozwoli?? mi przystopowa?? na chwil?? i spojrze?? na sw??j zwi??zek z szerszej perspektywy. Zrozumia??am jak wiele rzeczy jeszcze jest do naprawy i jak du??o zale??ne jest ode mnie samej. Pom??g?? mi spojrze?? na m????a ??agodniejszym okiem. ??wietne narz??dzie do analizy relacji, kt??re w dodatku jest tak skonstruowane, ??e na pewno b??d?? do niego wraca??.',
            name: 'Adriana',
          },
          {
            text: "Kurs Gosi to by?? konkretny motywator do dzia??ania i przemy??le?? dotycz??cych nie tylko relacji z partnerem, ale te?? ze samym sob??. ??wietnym narz??dziem jest workbook, kt??ry podsumowuje ka??dy dzie?? i pomaga jeszcze wi??cej wyci??gn???? z kursu ani??eli samo s??uchanie. Poza tym i do kursu i do workbook'a mo??na wr??ci?? po czasie i zobaczy?? jakie post??py si?? zrobi??o. Do tego przestrze?? w grupie, gdzie mo??na dzieli?? si?? swoimi refleksjami z innymi, r????nymi sta??ami kobietami, jest bardzo inspiruj??ca i sk??aniaj??ca do przemy??le??. Dzi??kuj?? za ten czas.",
            name: 'Maria',
          },
          {
            text: 'Jestem bardzo wdzi??czna, ??e wzi????am udzia?? w kursie organizowanym przez Gosi??. Wiedza, kt??r?? przerobi??y??my na kursie pomaga u??o??y?? sobie w g??owie wiele spraw, nie tylko je??li chodzi o zwi??zek, ale przede wszystkim pomaga u??wiadomi??, ??e je??li same zadbamy o siebie, zmienimy szkodliwe my??lenie o swoim M????u, ju?? samym tym mo??emy wiele zmieni?? w swoim zwi??zku. Mn??stwo trafnych wskaz??wek, ??wietny workbook, dodatkowy atut to mo??liwo???? dzielenia si?? przemy??leniami na grupie  mnie kurs bardzo pom??g??  na pewno b??d?? wr??c?? do kursu za jaki?? czas. Dzi??ki Gosia :)',
            name: 'Julia',
          },
          {
            text: 'Dzi??ki za ten kurs, Gosia! Bardzo podoba??o mi si?? podzielenie go na dwa modu??y, pierwszy bardziej nastawiony na obserwacje, a drugi na dzia??anie. My??l??, ??e to warto??ciowe ??r??d??o wiedzy przedstawione bardzo przyst??pnie i zwi????le:) Dodatkowym atutem jest to, ??e mo??na do niego wraca?? wielokrotnie, poniewa?? dynamika zwi??zku stale si?? zmienia. Bardzo motywuj??cym narz??dziem by?? workbook, kt??ry sk??ania do spisania konkretnych my??li, dzi??ki czemu ??atwiej sobie wszystko pouk??ada?? w g??owie. Zdecydowanie polecam kobietom w ka??dym etapie zwi??zku!',
            name: 'Karolina',
          },
          {
            text: 'Ten kurs to by?? dla mnie jak z??amanie ??le zro??ni??tej ko??ci. Mia??am w sobie bunt i brak zrozumienia dla wiele spraw, co utrudni??o mi udzielanie si?? w grupie. Jednak mimo tego i moich trudno??ci uda??o mi si?? wyci??gn???? z niego co??, co my??la??am, ??e moim przypadku jest niemo??liwe. Poza moimi b????dami dostrzeg??am, ??e po prostu kocham mojego m????a, wierz?? w to, ??e on mnie kocha i nawet gdy w mojej g??owie rodz?? si?? czarne scenariusze rozwodu s??ysz?? (przysi??gam, ??e wymawiane ze spokojem jaki s??ysza??am w Gosi g??osie podczas kursu) ???jeste??my w tym razem???, ???kocham go i chc?? dla niego dobrze???, ???on mnie kocha i chce dla mnie dobrze???. Dzi??kuj?? za to  Mam zamiar wr??ci??, bo wiem, ??e wiele temat??w musz?? rozkmini?? jeszcze raz, albo nawet od zera i troch?? wi??cej czasu i uwagi im po??wieci??. Jestem bardzo wdzi??czna, ??e jest taka opcja.',
            name: 'Dorota',
          },
          {
            text: 'Mia??am w??tpliwo??ci czy zapisa?? si?? na kurs, poniewa?? przesz??am ju?? terapi?? dla par razem z m????em i ka??dy z nas przeszed?? terapi?? indywidualn??, wi??c mia??am obawy czy dowiem si?? na kursie czego?? nowego, czy ten kurs w og??le jest dla mnie. Bardzo si?? ciesz??, ??e do niego do????czy??am! Pomimo, ??e nie dowiedzia??am si?? na kursie ??adnych ca??kiem nowych rzeczy i nie dokona??am rewolucyjnego odkrycia, je??li chodzi o moj?? relacj?? z m????em, to bardzo dobrze by??o przypomnie?? sobie podstawy, kt??re ju?? kiedy?? przerabiali??my na terapii dla par, a o kt??rych w codziennym ??yciu ??atwo zapomnie?? oraz spojrze?? na niekt??re sytuacje z innej perspektywy. Doceni??am bardzo jak du???? prac?? wykonali??my z m????em do tej pory, wyznaczy??am sobie nowe cele i wiem nad czym chcia??abym pracowa?? w najbli??szym czasie. Workbook jest do tego doskona??ym narz??dziem i chcia??abym do niego wraca?? co jaki?? czas.',
            name: 'Martyna',
          },
        ]}
      />
      {/* <Footer /> */}

      <Section className="py-6 bg-gray-100">
        <FooterCentered logo={'??led?? nas na social mediach:'}></FooterCentered>
      </Section>
    </>
  );
};

export default Index;
