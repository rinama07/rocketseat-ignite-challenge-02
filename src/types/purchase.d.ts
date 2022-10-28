export interface PurchaseProduct {
  id: string;
  name: string;
  unitPrice: number;
  unitAmount: number;
  imageSrc?: string;
}

export interface PurchaseData {
  products: PurchaseProduct[] | null;
  address?: DeliveryAddress;
  payment?: DeliveryPayment;
}
