export enum BeerEnum {
  '350ml' = 350,
  '473ml' = 473,
  '1l' = 1000,
}

export type BeerType = '350ml' | '473ml' | '1l';

export interface Beer {
  price: string;
  beerType: BeerType;
}
