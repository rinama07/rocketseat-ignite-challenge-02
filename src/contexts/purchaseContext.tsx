import { createContext, ReactNode, useContext, useState } from 'react';

import { DeliveryAddress } from '../types/deliveryAddress';
import { DeliveryPayment } from '../types/deliveryPayment';
import { PurchaseProduct } from '../types/purchaseProduct';

interface PurchaseContextProps {
  cartProducts: PurchaseProduct[];
  deliveryAddress: DeliveryAddress;
  deliveryPayment: DeliveryPayment;

  addProductToCart: (product: PurchaseProduct) => void;
  isDeliveryAddressFilled: () => boolean;
  removeProductFromCart: (productId: string) => void;
  updateAddressData: (data: DeliveryAddress) => void;
  updatePaymentData: (data: DeliveryPayment) => void;
  updateProductUnitAmount: (productId: string, value: number) => void;
}

const initialState = {
  cartProducts: [],
  deliveryAddress: {
    zipCode: '',
    streetName: '',
    streetNumber: '',
    unitNumber: '',
    district: '',
    city: 'São Paulo',
    state: 'SP',
  },
  deliveryPayment: {
    type: null,
  },

  addProductToCart: () => null,
  isDeliveryAddressFilled: () => false,
  removeProductFromCart: () => null,
  updateAddressData: () => null,
  updatePaymentData: () => null,
  updateProductUnitAmount: () => null,
};

const PurchaseContext = createContext<PurchaseContextProps>(initialState);

export function PurchaseContextProvider({ children }: { children: ReactNode }) {
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>(
    initialState.deliveryAddress
  );
  const [cartProducts, setCartProducts] = useState<PurchaseProduct[]>(
    initialState.cartProducts
  );
  const [deliveryPayment, setDeliveryPayment] = useState<DeliveryPayment>(
    initialState.deliveryPayment
  );

  function addProductToCart(product: PurchaseProduct): void {
    console.log('addProductToCart', product.id);
    const cartProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (cartProduct) {
      updateProductUnitAmount(cartProduct.id, cartProduct.unitAmount + 1);
    } else {
      setCartProducts((cartProducts) => [...cartProducts, product]);
    }
  }

  function updateProductUnitAmount(productId: string, value: number): void {
    console.log('updateProductUnitAmount', productId);
    setCartProducts((cartProducts) =>
      cartProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            unitAmount: value,
          };
        }

        return product;
      })
    );
  }

  function removeProductFromCart(productId: string): void {
    console.log('removeProductFromCart', productId);
    setCartProducts((cartProducts) =>
      cartProducts.filter((cartProduct) => cartProduct.id !== productId)
    );
  }

  function updateAddressData(data: DeliveryAddress): void {
    console.log('updateAddressData', data);
    setDeliveryAddress(data);
  }

  function updatePaymentData(data: DeliveryPayment): void {
    console.log('updatePaymentData', data);
    setDeliveryPayment(data);
  }

  function isDeliveryAddressFilled(): boolean {
    return Boolean(
      deliveryAddress.zipCode &&
        deliveryAddress.streetName &&
        deliveryAddress.streetNumber &&
        deliveryAddress.district &&
        deliveryAddress.city &&
        deliveryAddress.state
    );
  }

  return (
    <PurchaseContext.Provider
      value={{
        cartProducts,
        deliveryAddress,
        deliveryPayment,
        addProductToCart,
        isDeliveryAddressFilled,
        removeProductFromCart,
        updateAddressData,
        updatePaymentData,
        updateProductUnitAmount,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}

export const usePurchaseContext = (): PurchaseContextProps =>
  useContext(PurchaseContext);
