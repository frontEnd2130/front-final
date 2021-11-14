import './countries.module.css';
import Link from "next/link";
import imagenDefault from "../../public/Images/fondoSabanaFutbol.jpg";
import "bootstrap/dist/css/bootstrap.min.css"
import Image from 'next/image'
import {useCountries} from '../useCountries'

/* eslint-disable-next-line */
export interface CountriesProps {}

export function Countries(props: CountriesProps) {
 const [countries] = useCountries();
 // const countries =[];
  //console.log(process.env.API_KEY);
 /* testApi().then((res)=>{
    console.log(res.data)
  });*/
  return (
    <div>
      <h1>Welcome to Countries!</h1>
      {
        countries && countries.length > 0 
        ?
        countries.map(({country_id, name, country_code, continent}) =>  country_code &&
          <div className="container mb-4">
            <div className="card">
              <Image 
                src={imagenDefault} 
                className="img-responsive w-100"
              />
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">Continente: {continent}</p>
                <div className="d-grid gap-2 mb-4 " key={country_id}>
                  <Link href="/teams"> 
                    <button type="button" className="btn btn-primary btn-lg btn-block">Equipos</button>
                  </Link>
                </div>
              </div>
              
            </div>
            
          </div>
           
          )
        :
        <p>no data</p>
      }
    </div>
  );
}

export default Countries;
