import Link from 'next/link';
import styles from './index.module.css';
import Teams from './../app/teams/teams';
import { useRouter } from 'next/router';

export function Team() {
  const router = useRouter();
  const { country_id } = router.query;
  console.log(country_id);
  if (!country_id) {
    return <h2>Loading</h2>;
  }
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  
  return (
    <div className={styles.page}>
      <Teams country_id={country_id.toString()} />
    </div>
  );
}

export default Team;
