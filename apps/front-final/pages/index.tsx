import styles from './index.module.css';
import Link from 'next/link';
import { Ui } from '@front-workspace/ui';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
//import logo from '/logo futbol.png';
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="row e justify-content-center align-items-center ">
        <div className="col-auto p-3 block-center">
          <div className="text-center image-size">
            <Link href="/index">
              <img src="/Images/logo futbol.png" className="img-responsive" width="128" height="128"/>
            </Link>

            
          </div>
        </div>
      </div>
      <Ui title="Sabana Futbol" showTitle />
      <div className="d-grid gap-2 mb-4">
        <Link href="/countries">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Ver Paises
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
