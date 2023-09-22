import { toLocaleCurrency } from '@/helpers/toLocaleCurrency';
import styles from './styles.module.css';
import { Beer } from '@/types/beer';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosBeer } from 'react-icons/io';
import { transformLiquidUnit } from '@/helpers/transformLiquidUnit';
import { iconByLiquidAmount } from '@/helpers/iconByLiquidAmount';

export interface BeerCardProps {
  beer: Beer;
  cheapestBeerId: string;
  removeBeer: (beerId: string) => void;
}

export default function BeerCard({
  beer,
  cheapestBeerId,
  removeBeer,
}: BeerCardProps) {
  const beerPriceInNumber = Number(beer.price.replace(',', '.'));
  const BeerIcon = iconByLiquidAmount(beer.amountInMl);
  const isTheCheapestBeer = beer.id === cheapestBeerId;

  return (
    <div
      className={`${styles.beerCardWrapper} ${
        isTheCheapestBeer ? styles.cheapestBeerWrapper : ''
      }`}
    >
      {isTheCheapestBeer ? (
        <div className={styles.cheapestBeerBadge}>
          <IoIosBeer color="#22C55E" size={24} />
        </div>
      ) : null}
      <button
        type="button"
        className={styles.removeBeer}
        onClick={() => removeBeer(beer.id)}
      >
        <AiOutlineClose size={24} color="#EAB308" />
      </button>
      <div>
        <BeerIcon size={112} />
      </div>
      <div className={styles.beerInfoWrapper}>
        <h2>{beer.name}</h2>
        <p>
          <span>Total:</span>
          <span>{toLocaleCurrency(beerPriceInNumber)}</span>
        </p>
        <p>
          <span>Unidades:</span>
          <span>{beer.unit}</span>
        </p>
        <p>
          <span>Quantidade:</span>
          <span>{transformLiquidUnit(beer.amountInMl)}</span>
        </p>
        <p>
          <span>Preço por litro:</span>
          <span>{toLocaleCurrency(beer.pricePerMl * 1000)}</span>
        </p>
        <p>
          <span>Preço por unidade:</span>
          <span>{toLocaleCurrency(beerPriceInNumber / beer.unit)}</span>
        </p>
      </div>
    </div>
  );
}
