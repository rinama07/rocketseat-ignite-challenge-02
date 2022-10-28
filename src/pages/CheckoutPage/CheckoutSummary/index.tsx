import { Trash } from 'phosphor-react';

import testImage from '../../../assets/cafe-leite.svg';
import { ProductCounterField } from '../../../components/ProductCounterField';
import { formatNumberToCurrency } from '../../../utils/number';

import { messages } from './messages';
import {
  CartProductContainer,
  CheckoutSummarySection,
  CheckoutValues,
  FinishCheckoutButton,
  ProductPrice,
  RemoveProductButton,
} from './styles';

function CheckoutItem() {
  function handleDeleteProductFromCart(): void {
    console.log('Delete product from cart');
  }

  return (
    <li>
      <CartProductContainer>
        <img src={testImage} alt="" />

        <div>
          <label>Expresso Tradicional</label>

          <div>
            <ProductCounterField
              id="checkout-product-1"
              value={1}
              maxValue={10}
              onChangeValue={() => console.log('change amount')}
            />

            <RemoveProductButton>
              <Trash size={16} onClick={handleDeleteProductFromCart} />
              {messages.buttons.remove.label}
            </RemoveProductButton>
          </div>
        </div>
      </CartProductContainer>

      <ProductPrice>R$ 9,90</ProductPrice>
    </li>
  );
}

export function CheckoutSummary() {
  const itemsTotalPrice = 29.7;
  const deliveryPrice = 3.7;
  const totalPrice = itemsTotalPrice + deliveryPrice;

  return (
    <CheckoutSummarySection>
      <ul>
        {[1, 2].map((x) => (
          <CheckoutItem key={x} />
        ))}
      </ul>

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
