import React from "react";
import { WiSunset } from "react-icons/wi";

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
            <WiSunset className="fa-c" />
          </div>
          <p id="havadurumu">{info.weather[0].description}</p>
          <div className="his">
            <p id="hissedilen">{info.main.feels_like}</p>
            <WiSunset className="fa-c" />
          </div>
        </div> :null
      }
    </div>
  );
};

export default Info;
