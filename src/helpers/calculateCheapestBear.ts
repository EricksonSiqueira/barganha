import { Beer, BeerEnum } from '@/types/beer';

export const calculateCheapestBear = (beers: Beer[]) => {
  const cheapestBeer = beers?.reduce((prev, curr) =>
    prev.pricePerMl < curr.pricePerMl ? prev : curr
  );

  return cheapestBeer;
};
