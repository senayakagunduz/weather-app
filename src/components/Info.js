import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSunPlantWilt } from "@fortawesome/free-solid-svg-icons";

const Info = ({ info, state }) => {
  return (
    <div>
      {
        state ? <div className="info">
          <p id="sehir">{info.name} / {info.sys.country}</p>
          <div className="genelDeger">
            <p id="sicaklik">
              {info.main.temp}
            </p>
          
            <FontAwesomeIcon icon={faSunPlantWilt} />
          </div>
          <p id="havadurumu">{info.weather[0].description}</p>
          <div className="his">
            <p id="hissedilen">{info.main.feels_like}</p>
           
          </div>
        </div> :null
      }
    </div>
  );
};

export default Info;
