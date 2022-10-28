type PaymentType = 'credit' | 'debit' | 'cash';

export interface DeliveryPayment {
  type: PaymentType | null;
}
