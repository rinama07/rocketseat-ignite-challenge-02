import styled from 'styled-components';

import { FieldsSectionHeader } from '../CheckoutFieldsContainer/styles';

export const FormAddressHeader = styled(FieldsSectionHeader)`
  & svg {
    color: ${(props) => props.theme.color.yellow700};
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;
