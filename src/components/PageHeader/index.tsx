import { MapPin, ShoppingCart } from 'phosphor-react';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import shopLogo from '../../assets/coffee-delivery-logo.svg';
import { usePurchaseContext } from '../../contexts/purchaseContext';

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
  const { cartProducts, deliveryAddress } = usePurchaseContext();

  const cartProductAmount = useMemo(() => {
    if (!cartProducts) {
      return 0;
    }

    return cartProducts.reduce((acc, curr) => {
      return acc + curr.unitAmount;
    }, 0);
  }, [cartProducts]);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={shopLogo} alt={messages.logo.alt} />
      </NavLink>

      <ButtonsContainer>
        <LocationButton title={messages.buttons.locale.title}>
          <MapPin size={22} />
          {deliveryAddress.city},&nbsp;{deliveryAddress.state}
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
