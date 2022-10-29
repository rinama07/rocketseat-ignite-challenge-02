import { MapPinLine } from 'phosphor-react';
import { ChangeEvent } from 'react';

import { TextField } from '../../../components/TextField';
import { DeliveryAddress } from '../../../types/deliveryAddress';
import { FieldsSection } from '../CheckoutFieldsContainer/styles';

import { messages } from './messages';
import { FieldContainer, FormAddressHeader } from './styles';

interface CheckoutAddressFieldsProps {
  data: DeliveryAddress;
  onUpdateData: (data: DeliveryAddress) => void;
}

export function CheckoutAddressFields({
  data,
  onUpdateData,
}: CheckoutAddressFieldsProps) {
  function onChangeAddressField(event: ChangeEvent<HTMLInputElement>): void {
    onUpdateData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <FieldsSection>
      <FormAddressHeader>
        <MapPinLine size={22} />

        <div>
          <h5>{messages.title}</h5>
          <span>{messages.subtitle}</span>
        </div>
      </FormAddressHeader>

      <FieldContainer>
        <TextField
          name="zipCode"
          value={data.zipCode}
          placeholder={messages.fields.zipCode}
          onChange={onChangeAddressField}
          width={40}
          required
        />
      </FieldContainer>

      <FieldContainer>
        <TextField
          name="streetName"
          value={data.streetName}
          placeholder={messages.fields.streetName}
          onChange={onChangeAddressField}
          required
        />
      </FieldContainer>

      <FieldContainer>
        <TextField
          name="streetNumber"
          value={data.streetNumber}
          placeholder={messages.fields.streetNumber}
          onChange={onChangeAddressField}
          width={40}
          required
        />

        <TextField
          name="unitNumber"
          value={data.unitNumber}
          placeholder={messages.fields.unitNumber}
          onChange={onChangeAddressField}
          adornmentText={messages.fields.adornment.optional}
        />
      </FieldContainer>

      <FieldContainer>
        <TextField
          name="district"
          value={data.district}
          placeholder={messages.fields.district}
          onChange={onChangeAddressField}
          width={40}
          required
        />

        <TextField
          name="city"
          value={data.city}
          placeholder={messages.fields.city}
          onChange={onChangeAddressField}
          width={45}
          required
        />

        <TextField
          name="state"
          value={data.state}
          placeholder={messages.fields.state}
          onChange={onChangeAddressField}
          width={15}
          required
        />
      </FieldContainer>
    </FieldsSection>
  );
}
