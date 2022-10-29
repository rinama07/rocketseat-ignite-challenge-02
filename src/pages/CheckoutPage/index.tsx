import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading } from '../../components/Heading';
import { usePurchaseContext } from '../../contexts/purchaseContext';

import { CheckoutAddressFields } from './CheckoutAddressFields';
import { CheckoutPaymentFields } from './CheckoutPaymentFields';
import { CheckoutSummary } from './CheckoutSummary';
import { messages } from './messages';
import { CheckoutBox, CheckoutContainer } from './styles';

export function CheckoutPage() {
  const { isDeliveryAddressFilled } = usePurchaseContext();

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();

    navigate('/success');
  }

  const isPaymentVisible = isDeliveryAddressFilled();

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit}>
        <CheckoutBox>
          <Heading element="h4" color="brown500">
            {messages.forms.title}
          </Heading>

          <CheckoutAddressFields />

          {isPaymentVisible && <CheckoutPaymentFields />}
        </CheckoutBox>

        <CheckoutBox>
          <Heading element="h4" color="brown500">
            {messages.summary.title}
          </Heading>

          <CheckoutSummary />
        </CheckoutBox>
      </form>
    </CheckoutContainer>
  );
}
