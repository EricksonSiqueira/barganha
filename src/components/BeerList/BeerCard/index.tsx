import { toLocaleCurrency } from '@/helpers/toLocaleCurrency';
import styles from './styles.module.css';
import { Beer } from '@/types/beer';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosBeer } from 'react-icons/io';
import { transformLiquidUnit } from '@/helpers/transformLiquidUnit';
import { iconByLiquidAmount } from '@/helpers/iconByLiquidAmount';

export interface BeerCardProps {
  beer: Beer;
  cheapestBeerId: string | undefined;
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
      className={`${styles.beerCard} ${
        isTheCheapestBeer ? styles.cheapestBeerCard : ''
      }`}
    >
      <div className={styles.beerTitleWrapper}>
        <h2 className={styles.beerTitle}>{beer.name}</h2>
      </div>

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
        <AiOutlineClose size={20} color="#EF4444" />
      </button>
      <div className={styles.beerCardWrapper}>
        <div>
          <BeerIcon size={112} />
        </div>
        <div className={styles.beerInfoWrapper}>
          <p>
            <span className={styles.beerInfoLabel}>Total:</span>
            <span>{toLocaleCurrency(beerPriceInNumber)}</span>
          </p>
          <p>
            <span className={styles.beerInfoLabel}>Unidades:</span>
            <span>{beer.unit}</span>
          </p>
          <p>
            <span className={styles.beerInfoLabel}>Quantidade:</span>
            <span>{transformLiquidUnit(beer.amountInMl)}</span>
          </p>
          <p>
            <span className={styles.beerInfoLabel}>Preço por litro:</span>
            <span>{toLocaleCurrency(beer.pricePerMl * 1000)}</span>
          </p>
          <p>
            <span className={styles.beerInfoLabel}>Preço por unidade:</span>
            <span>{toLocaleCurrency(beerPriceInNumber / beer.unit)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
