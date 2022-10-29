import { useEffect, useState } from 'react';
import { Heading } from '../../../components/Heading';
import { getProducts } from '../../../server/getProducts';
import { MenuProduct } from '../../../types/product';

import { messages } from './messages';
import { ProductCard } from './ProductCard';
import { ProductList, SectionContainer } from './styles';

export function ProductSection() {
  const [products, setProducts] = useState<MenuProduct[]>([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <SectionContainer>
      <Heading element="h2" color="brown500">
        {messages.title}
      </Heading>

      <ProductList>
        {products.map((product: MenuProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </SectionContainer>
  );
}
