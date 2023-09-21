import { Beer } from '@/types/beer';
import styles from './styles.module.css';
import BeerCard from './BeerCard';

export interface BeerListProps {
  beers: Beer[];
}
export default function BeerList({ beers }: BeerListProps) {
  return (
    <div className={styles.beerListWrapper}>
      {beers.map((beer) => (
        <BeerCard beer={beer} key={beer.id} />
      ))}
    </div>
  );
}
