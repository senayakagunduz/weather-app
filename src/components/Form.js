import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";

export const Form = ({ setInfo,setState}) => {
  const [city, setCity] = useState("");

  const getData = async () => {
    const KEY = "aef00181dee1ab9c2ca43739994a52f0";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric&lang=tr`;
    await axios(baseUrl).then(async resp =>{ await setInfo(resp.data)}).catch(err => console.log("Hatanız : ", err));
    setState(true);
  };
  return (
    <div>
      <h1>Hava Durumu</h1>
      <form
        className="input-group"
        onSubmit={(e) => {
          e.preventDefault();
          getData();
        }}
      >
        <div className="input-group">
          <BiSearchAlt />
          <input
            className="form-control"
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Şehri giriniz"
          />
        </div>
        <div className="input-group mt-3 d-flex justify-content-center">
          <button type="button" onClick={()=>getData()} className="btn btn-primary" style={{marginTop:"3px",marginBottom:"5px"}}>
            Verileri getir
          </button>
        </div>
      </form>
    </div>
  );
};
