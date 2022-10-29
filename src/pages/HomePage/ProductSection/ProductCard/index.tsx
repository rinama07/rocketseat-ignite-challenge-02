import { ShoppingCartSimple } from 'phosphor-react';
import { useState } from 'react';

import { Heading } from '../../../../components/Heading';
import { ProductCounterField } from '../../../../components/ProductCounterField';
import { usePurchaseContext } from '../../../../contexts/purchaseContext';
import { MenuProduct } from '../../../../types/menuProduct';

import {
  AddProductToCartButton,
  Card,
  CategoryTags,
  ProductPrice,
} from './styles';

interface ProductCardProps {
  product: MenuProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const [cartProductQuantity, setCartProductQuantity] = useState<number>(1);

  const { addProductToCart } = usePurchaseContext();

  function handleAddProductToCart(): void {
    addProductToCart({
      id: product.id,
      name: product.name,
      unitAmount: cartProductQuantity,
      unitPrice: product.unitPrice,
      imageSrc: product.imageSrc ?? '',
    });
  }

  return (
    <Card>
      {product.imageSrc && <img src={product.imageSrc} alt={product.name} />}

      <CategoryTags>
        {product.categories?.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </CategoryTags>

      <Heading element="h3" color="brown500">
        {product.name}
      </Heading>

      <p>{product.description}</p>

      <footer>
        <ProductPrice>{product.price}</ProductPrice>

        <ProductCounterField
          id={product.id}
          maxValue={product.stockAmount}
          onChangeValue={setCartProductQuantity}
          value={cartProductQuantity}
        />

        <AddProductToCartButton onClick={handleAddProductToCart}>
          <ShoppingCartSimple size={16} weight="fill" />
        </AddProductToCartButton>
      </footer>
    </Card>
  );
}
