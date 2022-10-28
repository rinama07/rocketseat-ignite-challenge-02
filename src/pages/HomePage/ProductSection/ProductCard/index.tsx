import { ShoppingCartSimple } from 'phosphor-react';
import { useState } from 'react';

import { Heading } from '../../../../components/Heading';
import { ProductCounterField } from '../../../../components/ProductCounterField';
import { MenuProduct } from '../../../../types/product';

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

  function handleClickAddProductToCart(): void {
    console.log('add product to cart');
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

        <AddProductToCartButton onClick={handleClickAddProductToCart}>
          <ShoppingCartSimple size={16} weight="fill" />
        </AddProductToCartButton>
      </footer>
    </Card>
  );
}
