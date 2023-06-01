import { Product } from "./product";

export interface Shop {
  id: number;
  name: string;
  image: string;
  description: string;
  products: Product[];
}
