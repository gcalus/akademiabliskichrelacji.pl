import Link from 'next/link';

import { Button } from './Button';

const FundamentButton = () => {
  return (
    <Link href="https://sklep.gosiacalus.pl/produkt/program-mentoringowy-zbuduj-solidny-fundament-relacji/">
      <a>
        <Button xl variant="gradient">
          Dołącz do programu
        </Button>
      </a>
    </Link>
  );
};

export { FundamentButton };
