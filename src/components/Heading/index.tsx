import { HTMLAttributes } from 'react';

import { HeadingText, HeadingVariant } from './styles';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: HeadingVariant;
}

export function Heading(props: HeadingProps) {
  return <HeadingText {...props} />;
}
