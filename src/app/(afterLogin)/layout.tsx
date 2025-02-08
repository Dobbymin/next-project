import { SearchForm } from './_components';
import styles from './layout.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}></div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <SearchForm />
          </section>
        </div>
      </div>
    </div>
  );
}
