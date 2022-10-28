import styled from 'styled-components';

import { IconButton } from '../../../../components/Button/styles';

export const Card = styled.article`
  background-color: ${(props) => props.theme.color.gray200};
  border-radius: ${(props) =>
    `${props.theme.border.radius.md} ${props.theme.border.radius.lg}`};
  height: 310px;
  margin-top: 0.5rem;
  padding: 0 1.5rem 1.25rem;
  position: relative;
  text-align: center;

  & img {
    height: 7.5rem;
    margin-top: -1.25rem;
    width: 7.5rem;
  }

  & h3 {
    margin-top: 1rem;
    text-transform: capitalize;
  }

  & p {
    font-size: ${(props) => props.theme.font.text.md};
    line-height: 1.3;
    text-align: center;
    margin-top: 0.5rem;
  }

  & footer {
    align-items: center;
    bottom: 1.25rem;
    display: flex;
    gap: 0.5rem;
    position: absolute;
  }
`;

export const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  justify-content: center;
  margin-top: 0.75rem;

  & span {
    background-color: ${(props) => props.theme.color.yellow300};
    border-radius: ${(props) => props.theme.border.radius.lg};
    color: ${(props) => props.theme.color.yellow700};
    font-size: ${(props) => props.theme.font.text.xs};
    font-weight: 700;
    line-height: 1.3;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }
`;

export const ProductPrice = styled.span`
  color: ${(props) => props.theme.color.brown400};
  font-family: 'Baloo 2', cursive;
  font-size: ${(props) => props.theme.font.text['3xl']};
  font-weight: 800;
  line-height: 1.3;
  padding-right: 0.5rem;
`;

export const AddProductToCartButton = styled(IconButton)`
  background-color: ${(props) => props.theme.color.purple700};
  color: ${(props) => props.theme.color.gray200};

  &:hover {
    background-color: ${(props) => props.theme.color.purple500};
    transition: background-color 0.2s, color 0.2s;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.purple500};
  }
`;
