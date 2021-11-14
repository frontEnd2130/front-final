import styles from './index.module.css';
import Link from "next/link";
import {Ui} from "@front-workspace/ui"
import "bootstrap/dist/css/bootstrap.min.css"
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Ui title = "Sabana Futbol" showTitle/>
      <div className="d-grid gap-2 mb-4">
        <Link href="/countries"> 
          <button type="button" className="btn btn-primary btn-lg btn-block">Paises</button>
        </Link>
      </div>
      <div className="d-grid gap-2 mb-4 ">
        <Link href="/teams"> 
          <button type="button" className="btn btn-primary btn-lg btn-block">Equipos</button>
        </Link>
      </div>
      <div className="d-grid gap-2 mb-4">
        <Link href="/players"> 
          <button type="button" className="btn btn-primary btn-lg btn-block">Jugadores</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Index;
