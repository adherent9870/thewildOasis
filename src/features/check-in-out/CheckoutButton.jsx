import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkedout, isCheckingout } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkedout(bookingId)}
      disabled={isCheckingout}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
