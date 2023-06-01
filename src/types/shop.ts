export interface Shop {
  id: number;
  name: string;
  image: string;
  description: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}
