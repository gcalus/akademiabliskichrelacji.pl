import { Button } from "./Button";

type Props = { onClick?: () => void };

const FundamentPricingButton: React.FC<Props> = ({ onClick }) => (
  <Button xl variant="gradient" onClick={onClick}>
    Dołącz do programu
  </Button>
);

export { FundamentPricingButton };
