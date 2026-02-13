import  BillEmptyCart  from "@/components/BillEmptyCart";
import PaySelection from "@/components/pay/paySelection/PaySelection";
import { useCart } from "@/context/CartContext";

export default function PayContainer() {
  const { cart } = useCart();

  return (
    <>
      {cart.length === 0 ? <BillEmptyCart /> : <PaySelection />}
    </>
  );
}
