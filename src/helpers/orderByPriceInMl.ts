import { Beer } from '@/types/beer';

export const orderByPriceInMl = (beers: Beer[]) => {
  return beers.sort((a, b) => a.pricePerMl - b.pricePerMl);
};
