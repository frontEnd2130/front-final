import styles from './index.module.css';
import Link from 'next/link';
import { Ui } from '@front-workspace/ui';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import logo from '../public/Images/logo futbol.png';
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
              <Image src={logo} className="img-responsive" />
            </Link>
          </div>
        </div>
      </div>
      <Ui title="Sabana Futbol" showTitle />
      <nav>
        <ul>
          <div className="d-grid gap-2 mb-4">
            <Link href="/countries">
              <button type="button" className="btn btn-primary btn-lg btn-block">
                Show countries
              </button>
            </Link>
          </div>
        </ul>
      </nav>
      
    </div>
  );
}

export default Index;
