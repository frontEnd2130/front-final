import Link from "next/link";
import styles from './index.module.css';
import Teams from './../app/teams/teams';

export function Team() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Teams/>
    </div>
  );
}

export default Team;