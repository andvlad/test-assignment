export interface IProduct {
  isInternal: boolean;
  name: string;
  plu: string;
  price: number;
  productType: number;
  quantity: number;
  sortOrder: number;
  subItems: IProduct[];
}
