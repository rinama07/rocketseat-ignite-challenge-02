import { MapPinLine } from 'phosphor-react';
import { ChangeEvent } from 'react';

import { TextField } from '../../../components/TextField';
import { usePurchaseContext } from '../../../contexts/purchaseContext';
import { FieldsSection } from '../CheckoutFieldsContainer/styles';

import { messages } from './messages';
import { FieldContainer, FormAddressHeader } from './styles';

export function CheckoutAddressFields() {
  const { deliveryAddress, updateAddressData } = usePurchaseContext();

  function onChangeAddressField(event: ChangeEvent<HTMLInputElement>): void {
    updateAddressData({
      ...deliveryAddress,
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
          value={deliveryAddress.zipCode}
          placeholder={messages.fields.zipCode}
          onChange={onChangeAddressField}
          width={40}
          required
        />
      </FieldContainer>

      <FieldContainer>
        <TextField
          name="streetName"
          value={deliveryAddress.streetName}
          placeholder={messages.fields.streetName}
          onChange={onChangeAddressField}
          required
        />
      </FieldContainer>

      <FieldContainer>
        <TextField
          name="streetNumber"
          value={deliveryAddress.streetNumber}
          placeholder={messages.fields.streetNumber}
          onChange={onChangeAddressField}
          width={40}
          required
        />

        <TextField
          name="unitNumber"
          value={deliveryAddress.unitNumber}
          placeholder={messages.fields.unitNumber}
          onChange={onChangeAddressField}
          adornmentText={messages.fields.adornment.optional}
        />
      </FieldContainer>

      <FieldContainer>
        <TextField
          name="district"
          value={deliveryAddress.district}
          placeholder={messages.fields.district}
          onChange={onChangeAddressField}
          width={40}
          required
        />

        <TextField
          name="city"
          value={deliveryAddress.city}
          placeholder={messages.fields.city}
          onChange={onChangeAddressField}
          width={45}
          required
        />

        <TextField
          name="state"
          value={deliveryAddress.state}
          placeholder={messages.fields.state}
          onChange={onChangeAddressField}
          width={15}
          required
        />
      </FieldContainer>
    </FieldsSection>
  );
}
