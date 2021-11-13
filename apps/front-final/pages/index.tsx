import styles from './index.module.css';
import Link from "next/link";
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h2>Hola mundo</h2>
      <Link href="/about"> About  </Link>
    </div>
  );
}

export default Index;
