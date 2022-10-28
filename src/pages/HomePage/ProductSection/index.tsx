import { useEffect, useState } from 'react';

import { Heading } from '../../../components/Heading';
import { ProductData } from '../../../types/api/product';
import { MenuProduct } from '../../../types/product';
import { formatNumberToCurrency } from '../../../utils/number';

import { messages } from './messages';
import { ProductCard } from './ProductCard';
import { ProductList, SectionContainer } from './styles';

export function ProductSection() {
  const [productList, setProductList] = useState<MenuProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:3004/products')
      .then((response) => response.json())
      .then((data: ProductData[]) => {
        setProductList(
          data.map((product) => ({
            ...product,
            categories: product.categories?.split(',') ?? [],
            imageSrc: 'src/assets/' + product.image?.src ?? '',
            price: formatNumberToCurrency(product.unitPrice),
          }))
        );
      });
  }, []);

  return (
    <SectionContainer>
      <Heading element="h2" color="brown500">
        {messages.title}
      </Heading>

      <ProductList>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </SectionContainer>
  );
}
