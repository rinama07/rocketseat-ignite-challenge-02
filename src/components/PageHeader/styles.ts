import styled from 'styled-components';

import { Button, IconButton } from '../../components/Button/styles';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.color.gray100};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: calc(100vw - 20rem);
  padding: 2rem 0;
  width: 100%;

  & img {
    height: 2.5rem;
    width: 5.25rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocationButton = styled(Button)`
  background-color: ${(props) => props.theme.color.purple300};
  color: ${(props) => props.theme.color.purple700};

  &:hover {
    background-color: ${(props) => props.theme.color.purple500};
    color: ${(props) => props.theme.color.gray200};
    transition: background-color 0.2s, color 0.2s;

    & svg {
      color: ${(props) => props.theme.color.gray200};
      transition: color 0.2s;
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.purple700};
  }

  & svg {
    color: ${(props) => props.theme.color.purple500};
  }
`;

export const CartContainer = styled.div`
  position: relative;
`;

export const CartButton = styled(IconButton)`
  background-color: ${(props) => props.theme.color.yellow300};
  color: ${(props) => props.theme.color.yellow700};

  &:hover {
    background-color: ${(props) => props.theme.color.yellow500};
    color: ${(props) => props.theme.color.gray200};
    transition: background-color 0.2s, color 0.2s;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.yellow700};
  }
`;

export const CartProductAmount = styled.span`
  align-items: center;
  background-color: ${(props) => props.theme.color.yellow700};
  border-radius: 50%;
  color: ${(props) => props.theme.color.white};
  display: flex;
  height: 1.25rem;
  justify-content: center;
  position: absolute;
  right: -0.625rem;
  top: -0.625rem;
  width: 1.25rem;
  z-index: 1;
`;
