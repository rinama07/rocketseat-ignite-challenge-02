import styled from 'styled-components';

import { ThemeColor } from '../../styles/themes/default';

interface HeadingProps {
  color: ThemeColor;
}

export const Heading1 = styled.h1<HeadingProps>`
  color: ${(props) => props.theme.color[props.color]};
  font-family: 'Baloo 2', cursive;
  font-size: ${(props) => props.theme.font.heading.xl};
  font-weight: 800;
  line-height: 1.3;
`;

export const Heading2 = styled.h2<HeadingProps>`
  color: ${(props) => props.theme.color[props.color]};
  font-family: 'Baloo 2', cursive;
  font-size: ${(props) => props.theme.font.heading.lg};
  font-weight: 800;
  line-height: 1.3;
`;

export const Heading3 = styled.h3<HeadingProps>`
  color: ${(props) => props.theme.color[props.color]};
  font-family: 'Baloo 2', cursive;
  font-size: ${(props) => props.theme.font.heading.md};
  font-weight: 700;
  line-height: 1.3;
`;

export const Heading4 = styled.h4<HeadingProps>`
  color: ${(props) => props.theme.color[props.color]};
  font-family: 'Baloo 2', cursive;
  font-size: ${(props) => props.theme.font.heading.sm};
  font-weight: 700;
  line-height: 1.3;
`;
