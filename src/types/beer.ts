export enum BeerEnum {
  '350ml' = 350,
  '473ml' = 473,
  '1l' = 1000,
}

export interface BeerFromForm {
  price: string;
  unit: number;
  amountInMl: number;
}

export interface Beer extends BeerFromForm {
  id: string;
  pricePerMl: number;
}
