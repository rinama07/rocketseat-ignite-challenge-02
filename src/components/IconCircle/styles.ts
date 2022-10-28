import styled from 'styled-components';

import { ThemeColor } from '../../styles/themes/default';

interface BenefitItemProps {
  color: ThemeColor;
}

export const Circle = styled.div<BenefitItemProps>`
  border-radius: 50%;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.color[props.color]};
  line-height: 0;

  & > svg {
    color: ${(props) => props.theme.color.gray100};
  }
`;
