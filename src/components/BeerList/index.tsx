import { Beer } from '@/types/beer';
import styles from './styles.module.css';
import BeerCard from './BeerCard';

export interface BeerListProps {
  beers: Beer[];
  cheapestBeer: Beer;
}
export default function BeerList({ beers, cheapestBeer }: BeerListProps) {
  return (
    <div className={styles.beerListWrapper}>
      {beers.map((beer) => (
        <BeerCard beer={beer} cheapestBeerId={cheapestBeer.id} key={beer.id} />
      ))}
    </div>
  );
}
