import styled from 'styled-components';

import { Button } from '../../../../components/Button/styles';

export const ProductListContainer = styled.ul`
  list-style: none;
  max-height: 360px;
  overflow-y: auto;

  & li + li {
    padding-top: 1.5rem;
  }

  & li {
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.color.gray400};
    display: flex;
    gap: 3rem;
    padding: 0 0.25rem 1.5rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 1.25rem;

  & > img {
    height: 4rem;
    width: 4rem;
  }

  & > div {
    flex: 1;
    height: 100%;

    & label {
      display: block;
      font-size: ${(props) => props.theme.font.text.lg};
      color: ${(props) => props.theme.color.brown500};
      line-height: 1.3;
    }

    & > div {
      margin-top: 0.25rem;
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export const RemoveProductButton = styled(Button)`
  background-color: ${(props) => props.theme.color.gray400};
  color: ${(props) => props.theme.color.brown400};
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.color.gray500};
    color: ${(props) => props.theme.color.brown500};
    transition: background-color 0.2s, color 0.2s;

    & svg {
      color: ${(props) => props.theme.color.purple700};
      transition: color 0.2s;
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.purple500};
  }

  & svg {
    color: ${(props) => props.theme.color.purple500};
  }
`;

export const ProductPrice = styled.span`
  color: ${(props) => props.theme.color.brown400};
  font-family: 'Baloo 2', cursive;
  font-size: ${(props) => props.theme.font.text.lg};
  font-weight: 700;
  line-height: 1.3;
`;
