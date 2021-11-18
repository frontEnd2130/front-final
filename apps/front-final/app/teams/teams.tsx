import './teams.module.css';
import { useTeams, getTeams } from '../useTeams';
import { TeamsProps } from '@front-workspace/types';
/* eslint-disable-next-line */

export function Teams(props: TeamsProps) {
  const { country_id } = props;
  const [teams] = useTeams(country_id);
  /* getTeams(country_id)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });*/
  return (
    <div>
      <div className="row e justify-content-center align-items-center ">
        <div className="col-auto p-3 block-center">
          <div className="text-center image-size"></div>
        </div>
      </div>

      <h1>Welcome to Teams!</h1>

      {teams && teams.length > 0 ? (
        teams.map(
          ({ team_id, name, short_code, logo }) =>
            short_code && (
              <div className="container mb-4 ">
                <div className="card">
                  <div className="row e justify-content-center align-items-center ">
                    <div className="col-auto p-3 block-center">
                      <div className="text-center logo-size ">
                          <img src={logo} alt="" className="logo-size"/>
                      </div>
                    </div>
                  </div>
                
                  <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Short code: {short_code}</p>
                    <div className="d-grid gap-2 mb-4 " key={country_id}>
                    </div>
                  </div>
                </div>
              </div>
              // <div className="container mb-4">
              //   <div className="card">
              //     <div className="card-body">
              //       <div className="text-center image-size">
              //         <img src={logo} alt="" />
              //       </div>

              //       <h4 className="card-title">{name}</h4>
              //       <p className="card-text">Short code: {short_code}</p>
              //       <div className="d-grid gap-2 mb-4 " key={team_id}></div>
              //     </div>
              //   </div>
              // </div>
            )
        )
      ) : (
        <p>no data</p>
      )}
    </div>
  );
}

export default Teams;
