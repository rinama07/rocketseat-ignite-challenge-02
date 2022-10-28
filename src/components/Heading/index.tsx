import { ReactNode } from 'react';

import { ThemeColor } from '../../styles/themes/default';

import { Heading1, Heading2, Heading3, Heading4 } from './styles';

interface HeadingProps {
  element?: 'h1' | 'h2' | 'h3' | 'h4';
  color?: ThemeColor;
  children?: ReactNode;
}

export function Heading({
  element = 'h1',
  color = 'brown700',
  children,
}: HeadingProps) {
  if (element === 'h1') {
    return <Heading1 color={color}>{children}</Heading1>;
  } else if (element === 'h2') {
    return <Heading2 color={color}>{children}</Heading2>;
  } else if (element === 'h3') {
    return <Heading3 color={color}>{children}</Heading3>;
  } else {
    return <Heading4 color={color}>{children}</Heading4>;
  }
}
