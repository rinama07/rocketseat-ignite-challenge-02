import { FormEvent, useState } from 'react';

import { Heading } from '../../components/Heading';
import { DeliveryAddress } from '../../types/address';
import { DeliveryPayment } from '../../types/payment';

import { CheckoutAddressFields } from './CheckoutAddressFields';
import { CheckoutPaymentFields } from './CheckoutPaymentFields';
import { CheckoutSummary } from './CheckoutSummary';
import { messages } from './messages';
import { CheckoutBox, CheckoutContainer } from './styles';

export function CheckoutPage() {
  const [paymentData, setDeliveryPayment] = useState<DeliveryPayment>({
    type: null,
  });

  const [addressData, setDeliveryAddress] = useState<DeliveryAddress>({
    zipCode: '',
    streetName: '',
    streetNumber: '',
    unitNumber: undefined,
    district: '',
    city: '',
    state: '',
  });

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();

    console.log('Redirect to success if form submitted');
  }

  const isPaymentVisible =
    addressData.zipCode &&
    addressData.streetName &&
    addressData.streetNumber &&
    addressData.district &&
    addressData.city &&
    addressData.state;

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit}>
        <CheckoutBox>
          <Heading element="h4" color="brown500">
            {messages.forms.title}
          </Heading>

          <CheckoutAddressFields
            data={addressData}
            onUpdateData={setDeliveryAddress}
          />

          {isPaymentVisible && (
            <CheckoutPaymentFields
              data={paymentData}
              onUpdateData={setDeliveryPayment}
            />
          )}
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
