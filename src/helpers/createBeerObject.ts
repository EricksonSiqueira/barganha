import { v4 as uuidv4 } from 'uuid';
import { Beer, BeerFromForm } from '@/types/beer';

export const createBeerObject = (beer: BeerFromForm) => {
  const beerId = uuidv4();

  const price = Number(beer.price.replace(',', '.'));

  const beerUnitPrice = price / beer.unit;

  const beerPricePerMl = beerUnitPrice / beer.amountInMl;

  const newBeer: Beer = {
    ...beer,
    id: beerId,
    pricePerMl: beerPricePerMl,
  };

  return newBeer;
};
