import { Plus } from 'phosphor-react';

import { ThemeColor } from '../../styles/themes/default';

import { Circle } from './styles';

interface IconCircleProps {
  color: ThemeColor;
  Icon: typeof Plus;
}

export function IconCircle({ color, Icon }: IconCircleProps) {
  return (
    <Circle color={color}>
      <Icon size={16} />
    </Circle>
  );
}
