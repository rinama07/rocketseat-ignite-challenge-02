import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import shopLogo from '../../assets/coffee-delivery-logo.svg';

import { messages } from './messages';
import {
  ButtonsContainer,
  CartButton,
  CartContainer,
  CartProductAmount,
  HeaderContainer,
  LocationButton,
} from './styles';

export function PageHeader() {
  const cartProductAmount = 2;

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={shopLogo} alt={messages.logo.alt} />
      </NavLink>

      <ButtonsContainer>
        <LocationButton title={messages.buttons.locale.title}>
          <MapPin size={22} />
          {messages.buttons.locale.label}
        </LocationButton>

        <CartContainer>
          <NavLink to="/checkout">
            <CartButton title={messages.buttons.cart.title}>
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </NavLink>

          {cartProductAmount > 0 && (
            <CartProductAmount>{cartProductAmount}</CartProductAmount>
          )}
        </CartContainer>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
