import { toLocaleCurrency } from '@/helpers/toLocaleCurrency';
import styles from './styles.module.css';
import { Beer } from '@/types/beer';
import { GiBeerBottle } from 'react-icons/gi';
import { transformLiquidUnit } from '@/helpers/transformLiquidUnit';
import { iconByLiquidAmount } from '@/helpers/iconByLiquidAmount';

export interface BeerCardProps {
  beer: Beer;
  cheapestBeerId: string;
}

export default function BeerCard({ beer, cheapestBeerId }: BeerCardProps) {
  const beerPriceInNumber = Number(beer.price.replace(',', '.'));
  const BeerIcon = iconByLiquidAmount(beer.amountInMl);

  return (
    <div
      className={`${styles.beerCardWrapper} ${
        beer.id === cheapestBeerId ? styles.cheapestBeerWrapper : ''
      }`}
    >
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
