import { ProductData } from '../types/api/product';
import { MenuProduct } from '../types/menuProduct';
import { formatNumberToCurrency } from '../utils/number';

export async function getProducts(): Promise<MenuProduct[]> {
  const products: ProductData[] = await fetch('http://localhost:3004/products')
    .then((response) => response.json())
    .then((data: ProductData[]) => data);

  return products.map((product) => ({
    ...product,
    categories: product.categories?.split(',') ?? [],
    imageSrc: 'src/assets/' + product.image?.src ?? '',
    price: formatNumberToCurrency(product.unitPrice),
  }));
}
