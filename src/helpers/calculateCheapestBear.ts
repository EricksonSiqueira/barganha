import { Beer, BeerEnum } from '@/types/beer';

export const calculateCheapestBear = (beers: Beer[]) => {
  const cheapestBeer = beers.reduce((prev, curr) => {
    const currPrice = parseFloat(curr.price);
    const prevPrice = parseFloat(prev.price);

    const currBeerMl = BeerEnum[curr.beerType];
    const prevBeerMl = BeerEnum[prev.beerType];

    const currPricePerMl = currPrice / currBeerMl;
    const prevPricePerMl = prevPrice / prevBeerMl;

    return prevPricePerMl < currPricePerMl ? prev : curr;
  });

  return cheapestBeer;
};
