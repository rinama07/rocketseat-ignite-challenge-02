import styled from 'styled-components';

import { defaultTheme } from '../../styles/themes/default';

export type HeadingVariant = keyof typeof defaultTheme.color;

interface HeadingProps {
  variant: HeadingVariant;
}

export const HeadingText = styled.h1<HeadingProps>`
  color: ${(props) => props.theme.color[props.variant]};
  margin-bottom: 1rem;
`;
