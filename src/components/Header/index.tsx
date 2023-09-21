import { Kalam } from 'next/font/google';

const kalam = Kalam({ subsets: ['devanagari'], weight: ['400', '700'] });

import styles from './styles.module.css';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h2 className={`${kalam.className} ${styles.headerTitle}`}>Barganha</h2>
        <nav>
          <ul className={styles.headerNav}>
            <li>
              <a href="https://github.com/EricksonSiqueira" target="_blank">
                <FaGithub size={28} color="E4E4E7" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ericksonsiqueira/"
                target="_blank"
              >
                <FaLinkedin size={28} color="E4E4E7" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
