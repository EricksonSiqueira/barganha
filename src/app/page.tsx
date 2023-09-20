import BeerForm from '@/components/BeerForm';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <BeerForm />
    </main>
  );
}
