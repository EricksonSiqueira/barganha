export enum BeerEnum {
  '350ml' = 350,
  '473ml' = 473,
  '1l' = 1000,
}

export type BeerType = '350ml' | '473ml' | '1l';

export interface BeerFromForm {
  price: string;
  unit: number;
  amountInMl: number;
}

export interface Beer extends BeerFromForm {
  id: string;
  pricePerMl: number;
}
