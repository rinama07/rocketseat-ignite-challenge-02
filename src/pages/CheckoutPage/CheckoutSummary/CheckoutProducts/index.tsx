import { Trash } from 'phosphor-react';

import { ProductCounterField } from '../../../../components/ProductCounterField';
import { usePurchaseContext } from '../../../../contexts/purchaseContext';
import { formatNumberToCurrency } from '../../../../utils/number';
import { messages } from '../messages';

import {
  ProductContainer,
  ProductListContainer,
  ProductPrice,
  RemoveProductButton,
} from './styles';

export function CheckoutProducts() {
  const { cartProducts, removeProductFromCart, updateProductUnitAmount } =
    usePurchaseContext();

  function handleDeleteProduct(productId: string): void {
    removeProductFromCart(productId);
  }

  function handleChangeUnitAmount(productId: string) {
    return function (value: number) {
      updateProductUnitAmount(productId, value);
    };
  }

  return (
    <ProductListContainer>
      {cartProducts.map((product) => {
        const productTotalPrice = formatNumberToCurrency(
          product.unitAmount * product.unitPrice
        );

        return (
          <li key={product.id}>
            <ProductContainer>
              <img src={product.imageSrc} alt={product.name} />

              <div>
                <label>{product.name}</label>

                <div>
                  <ProductCounterField
                    id={product.id}
                    value={product.unitAmount}
                    maxValue={10}
                    onChangeValue={() => handleChangeUnitAmount(product.id)}
                  />

                  <RemoveProductButton>
                    <Trash
                      size={16}
                      onClick={() => handleDeleteProduct(product.id)}
                    />
                    {messages.buttons.remove.label}
                  </RemoveProductButton>
                </div>
              </div>
            </ProductContainer>

            <ProductPrice>{productTotalPrice}</ProductPrice>
          </li>
        );
      })}
    </ProductListContainer>
  );
}
