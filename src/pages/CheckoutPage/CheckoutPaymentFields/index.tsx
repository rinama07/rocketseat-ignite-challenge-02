import { Bank, CreditCard, MapPinLine, Money } from 'phosphor-react';

import { DeliveryPayment, PaymentType } from '../../../types/deliveryPayment';
import { FieldsSection } from '../CheckoutFieldsContainer/styles';

import { messages } from './messages';
import {
  FormPaymentHeader,
  PaymentTypeOption,
  PaymentTypesContainer,
} from './styles';

interface CheckoutPaymentFieldsProps {
  data: DeliveryPayment;
  onUpdateData: (data: DeliveryPayment) => void;
}

export function CheckoutPaymentFields({
  data,
  onUpdateData,
}: CheckoutPaymentFieldsProps) {
  function onChangePaymentField(value: PaymentType): void {
    onUpdateData({ ...data, type: value });
  }

  return (
    <FieldsSection>
      <FormPaymentHeader>
        <MapPinLine size={22} />

        <div>
          <h5>{messages.title}</h5>
          <span>{messages.subtitle}</span>
        </div>
      </FormPaymentHeader>

      <PaymentTypesContainer
        value={data.type ?? ''}
        onValueChange={onChangePaymentField}
      >
        <PaymentTypeOption value="credit">
          <CreditCard size={16} />
          {messages.options.creditCard}
        </PaymentTypeOption>

        <PaymentTypeOption value="debit">
          <Bank size={16} />
          {messages.options.debitCard}
        </PaymentTypeOption>

        <PaymentTypeOption value="cash">
          <Money size={16} />
          {messages.options.cash}
        </PaymentTypeOption>
      </PaymentTypesContainer>
    </FieldsSection>
  );
}
