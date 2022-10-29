import { usePurchaseContext } from '../contexts/purchaseContext';

interface PurchaseSummaryData {
  itemsTotalPrice: number;
  deliveryPrice: number;
  totalPrice: number;
}

export function usePurchaseSummary(): PurchaseSummaryData {
  const { cartProducts } = usePurchaseContext();

  const itemsTotalPrice = cartProducts.reduce((acc, curr) => {
    return acc + curr.unitPrice * curr.unitAmount;
  }, 0);

  const deliveryPrice = itemsTotalPrice * 0.4;
  const totalPrice = itemsTotalPrice + deliveryPrice;

  return {
    itemsTotalPrice,
    deliveryPrice,
    totalPrice,
  };
}
