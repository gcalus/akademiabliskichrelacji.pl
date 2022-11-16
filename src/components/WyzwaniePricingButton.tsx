import { Button } from "./Button";

type Props = { onClick?: () => void };

const WyzwaniePricingButton: React.FC<Props> = ({ onClick }) => (
  <Button xl variant="gradient" onClick={onClick}>
    Dołącz do wyzwania
  </Button>
);

export { WyzwaniePricingButton };
