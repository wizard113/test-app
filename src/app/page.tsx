import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const secret = process.env.JWT_SECRET;
  const DB_URL = process.env.DATABASE_URL;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>Next github action 배포22</h1>

          <h1>secret: {secret}</h1>
          <h1>dburl: {DB_URL}</h1>
        </div>
      </main>
    </div>
  );
}
