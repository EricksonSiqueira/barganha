import { Beer } from '@/types/beer';
import styles from './styles.module.css';
import BeerCard from './BeerCard';
import { PiBeerBottleFill } from 'react-icons/pi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export interface BeerListProps {
  beers: Beer[];
  cheapestBeer: Beer | undefined;
  removeBeer: (beerId: string) => void;
}
export default function BeerList({
  beers,
  cheapestBeer,
  removeBeer,
}: BeerListProps) {
  return (
    <div className={styles.beerListWrapper}>
      {beers.length > 0 ? (
        beers.map((beer) => (
          <BeerCard
            beer={beer}
            cheapestBeerId={cheapestBeer?.id}
            key={beer.id}
            removeBeer={removeBeer}
          />
        ))
      ) : (
        <div className={styles.beersNotFound}>
          <div className={styles.beersNotFoundIconsWrapper}>
            <PiBeerBottleFill size={128} color="#eab308" />
            <AiOutlineCloseCircle
              size={32}
              color="#EF4444"
              className={styles.beersNotFoundCloseIcon}
            />
          </div>
          <div className={styles.beersNotFoundTextWrapper}>
            <h2>Nenhuma cerveja encontrada</h2>
            <p>Adicione cervejas e comece a economizar!</p>
          </div>
        </div>
      )}
    </div>
  );
}
