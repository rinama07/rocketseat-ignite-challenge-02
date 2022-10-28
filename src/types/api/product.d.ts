export interface ProductData {
  id: string;
  name: string;
  description: string;
  unitPrice: number;
  stockAmount: number;
  categories?: string;
  image?: {
    src: string;
  };
}
