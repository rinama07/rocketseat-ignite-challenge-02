import { usePurchaseSummary } from '../../../hooks/usePurchaseSummary';
import { formatNumberToCurrency } from '../../../utils/number';

import { CheckoutProducts } from './CheckoutProducts';
import { messages } from './messages';
import {
  CheckoutSummarySection,
  CheckoutValues,
  FinishCheckoutButton,
} from './styles';

export function CheckoutSummary() {
  const { itemsTotalPrice, deliveryPrice, totalPrice } = usePurchaseSummary();

  return (
    <CheckoutSummarySection>
      <CheckoutProducts />

      <CheckoutValues>
        <div>
          <span>{messages.labels.itemTotal}</span>
          <span>{formatNumberToCurrency(itemsTotalPrice)}</span>
        </div>

        <div>
          <span>{messages.labels.deliveryPrice}</span>
          <span>{formatNumberToCurrency(deliveryPrice)}</span>
        </div>

        <div>
          <label>{messages.labels.totalPrice}</label>
          <label>{formatNumberToCurrency(totalPrice)}</label>
        </div>
      </CheckoutValues>

      <FinishCheckoutButton type="submit">
        {messages.buttons.confirm.label}
      </FinishCheckoutButton>
    </CheckoutSummarySection>
  );
}
