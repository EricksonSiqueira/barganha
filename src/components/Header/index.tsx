import { Kalam } from 'next/font/google';

const kalam = Kalam({ subsets: ['devanagari'], weight: ['400', '700'] });

import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h2 className={`${kalam.className} ${styles.headerTitle}`}>Barganha</h2>
      </div>
    </header>
  );
}
