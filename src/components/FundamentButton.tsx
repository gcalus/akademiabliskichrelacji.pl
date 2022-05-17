import Link from 'next/link';

import { Button } from './Button';

const FundamentButton = () => {
  return (
    <Link href="">
      <a>
        <Button xl variant="gradient">
          Dołącz do programu
        </Button>
      </a>
    </Link>
  );
};

export { FundamentButton };
