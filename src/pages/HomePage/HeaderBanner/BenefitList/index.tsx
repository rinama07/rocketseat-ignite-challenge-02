import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import { IconCircle } from '../../../../components/IconCircle';
import { ThemeColor } from '../../../../styles/themes/default';

import { messages } from './messages';
import { BenefitItem, ListContainer } from './styles';

const benefitList = [
  {
    color: 'yellow700' as ThemeColor,
    Icon: ShoppingCart,
    text: messages.first,
  },
  {
    color: 'brown400' as ThemeColor,
    Icon: Package,
    text: messages.second,
  },
  {
    color: 'yellow500' as ThemeColor,
    Icon: Timer,
    text: messages.third,
  },
  {
    color: 'purple500' as ThemeColor,
    Icon: Coffee,
    text: messages.fourth,
  },
];

export function BenefitList() {
  return (
    <ListContainer>
      {benefitList.map((benefit) => (
        <BenefitItem key={benefit.text}>
          <IconCircle color={benefit.color} Icon={benefit.Icon} />

          <span>{benefit.text}</span>
        </BenefitItem>
      ))}
    </ListContainer>
  );
}
