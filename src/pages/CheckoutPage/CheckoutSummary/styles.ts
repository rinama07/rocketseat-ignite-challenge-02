import styled from 'styled-components';

import { Button } from '../../../components/Button/styles';

export const CheckoutSummarySection = styled.section`
  background-color: ${(props) => props.theme.color.gray200};
  border-radius: ${(props) =>
    `${props.theme.border.radius.md} ${props.theme.border.radius.lg}`};
  margin-top: 1rem;
  padding: 2.5rem;
`;

export const CheckoutValues = styled.div`
  margin-top: 1.5rem;

  & div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    & span {
      color: ${(props) => props.theme.color.brown400};
      font-size: ${(props) => props.theme.font.text.lg};
      line-height: 1.3;
    }

    & label {
      color: ${(props) => props.theme.color.brown500};
      font-size: ${(props) => props.theme.font.text['2xl']};
      font-weight: 700;
      line-height: 1.3;
    }
  }
`;

export const FinishCheckoutButton = styled(Button)`
  background-color: ${(props) => props.theme.color.yellow500};
  color: ${(props) => props.theme.color.white};
  margin-top: 1.5rem;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.color.yellow700};
    color: ${(props) => props.theme.color.white};
    transition: background-color 0.2s, color 0.2s;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.yellow700};
  }
`;
