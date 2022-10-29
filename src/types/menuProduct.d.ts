export interface MenuProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  unitPrice: number;
  stockAmount: number;
  categories: string[];
  imageSrc?: string;
}
