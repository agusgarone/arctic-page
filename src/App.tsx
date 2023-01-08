/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BsFillBrightnessHighFill, BsClock } from "react-icons/bs";

const App = () => {
  const [time, setTime] = useState<any>();
  const [temperature, setTemperature] = useState<number>();

  const getInfo = () => {
    axios({
      method: "get",
      url: "http://api.weatherapi.com/v1/current.json?key=e0e5c5a1a4bd405c9ee214539230701&q=Longyearbyen&aqi=yes",
      responseType: "stream",
    }).then(function (response) {
      console.log(JSON.parse(response.data));
      const payload = JSON.parse(response.data);
      setTime(payload.location.localtime);
      setTemperature(payload.current.temp_c);
    });
  };

  useEffect(()=>{
    getInfo();
  },[])

  return (
    <div className="h-screen background-image bg-cover">
      <nav className="py-10 mx-20 mb-12 flex justify-between">
        <h1 className="text-xl font-montserrat">Arctic</h1>
        <ul className="flex items-center font-montserrat">
          <li>nose</li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
      <section className="relative top-32 bg-red w-screen h-1/3 z-10 flex justify-between">
        <div className="w-56 text-right font-montserrat">
          <div className="flex justify-end items-center text-white px-6">
            <BsFillBrightnessHighFill className="mr-3" />
            <p>Weather</p>
          </div>
          <h2 style={{fontSize: 60}} className="font-chonburi text-white">{temperature}</h2>
          <hr className="w-full h-0.5 bg-white" />
        </div>
        <div className="w-56">
        <div className="flex justify-start items-center text-white px-6">
            <BsClock className="mr-3" />
            <p className="font-montserrat">utc</p>
          </div>
          <h2 style={{fontSize: 60}} className="font-chonburi text-white">{time}</h2>
          <hr className="w-full h-0.5 bg-white" />
        </div>
      </section>
    </div>
  );
}

export default App;
