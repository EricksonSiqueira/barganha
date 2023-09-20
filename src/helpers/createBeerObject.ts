import { v4 as uuidv4 } from 'uuid';
import { Beer, BeerFromForm } from '@/types/beer';

export const createBeerObject = (beer: BeerFromForm) => {
  const beerId = uuidv4();

  const beerPrice = parseFloat(beer.price);

  const beerPricePerMl = beerPrice / beer.amountInMl;

  const newBeer: Beer = {
    ...beer,
    id: beerId,
    pricePerMl: beerPricePerMl,
  };

  return newBeer;
};
