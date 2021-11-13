import styles from './index.module.css';
import Link from "next/link";
import {Ui} from "@front-workspace/ui"
import Countries from "./../app/countries/countries"
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Ui title = "hola" showTitle/>
      <Link href="/about"> About  </Link>
      <Countries/>
    </div>
  );
}

export default Index;
