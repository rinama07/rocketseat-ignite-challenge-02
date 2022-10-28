import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  background-color: ${(props) => props.theme.color.gray100};
  margin: 0 auto;
  max-width: calc(100vw - 20rem);
  padding-top: 2.5rem;
  width: 100%;

  & form {
    display: flex;
    gap: 2rem;
  }
`;

export const CheckoutBox = styled.div`
  width: 50%;
`;
