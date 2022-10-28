import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';

import { FieldsSectionHeader } from '../CheckoutFieldsContainer/styles';

export const FormPaymentHeader = styled(FieldsSectionHeader)`
  & svg {
    color: ${(props) => props.theme.color.purple500};
  }
`;

export const PaymentTypesContainer = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
`;

export const PaymentTypeOption = styled(RadioGroup.Item)`
  align-items: center;
  background-color: ${(props) => props.theme.color.gray100};
  border-radius: ${(props) => props.theme.border.radius.md};
  border: 1px solid transparent;
  color: ${(props) => props.theme.color.brown400};
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.theme.font.text.sm};
  justify-content: center;
  gap: 0.5rem;
  line-height: 1.3;
  padding: 1rem 0.25rem;
  text-transform: uppercase;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.purple500};
  }

  &[data-state='unchecked']:hover {
    color: ${(props) => props.theme.color.brown500};
    background-color: ${(props) => props.theme.color.gray500};
    transition: background-color 0.2s, color 0.2s;
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.color.purple300};
    background-color: ${(props) => props.theme.color.purple300};
  }

  & svg {
    color: ${(props) => props.theme.color.purple500};
  }
`;
