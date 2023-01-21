/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BsFillBrightnessHighFill, BsClock, BsArrowUp } from "react-icons/bs";
import moment from "moment";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { INews } from "./models/news.model";
import logo from "/images/image1.png";

const App = () => {
  const [time, setTime] = useState<any>();
  const [temperature, setTemperature] = useState<number>();
  const [toggleIcon, setToggleIcon] = useState<boolean>(false);

  const getInfo = () => {
    axios({
      method: "get",
      url: "http://api.weatherapi.com/v1/current.json?key=e0e5c5a1a4bd405c9ee214539230701&q=Longyearbyen&aqi=yes",
      responseType: "stream",
    }).then(function (response) {
      const payload = JSON.parse(response.data);
      setTime(moment().add(4, "hour").format("H:mm"));
      setTemperature(payload.current.temp_c);
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const data: INews[] = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "¿La guerra de Ucrania frenará el avance de Rusia en el Ártico?",
      image: "image1.png",
      category: "POLITICA",
      date: "28-03-2022",
    },
    {
      id: "1001",
      code: "nvklal433",
      name: "Posible año récord para el zorro ártico en los países nórdicos con 762 cachorros contados en 2022",
      image: "image2.jpg",
      category: "ANIMAL",
      date: "13-06-2022",
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Arctic Fresh Projects lanza vuelos los sábados que unen Iqaluit e Igloolik",
      image: "image4.jpeg",
      category: "NOVEDAD",
      date: "02-01-2023",
    },
    {
      id: "1003",
      code: "244wgerg2",
      name: "Deja de lado a los osos polares, hay otro gran depredador a lo largo de la costa ártica",
      image: "image3.jpg",
      category: "ANIMAL",
      date: "12-11-2022",
    },
    {
      id: "1004",
      code: "h456wer53",
      name: "El depósito de tierras raras más grande de Europa encontrado en el Ártico sueco",
      image: "image5.png",
      category: "NOVEDAD",
      date: "21-12-2022",
    },
  ];

  const productTemplate = (product: INews) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="mb-3">
            <img
              src={`/images/${product.image}`}
              alt={product.name}
              className="w-full h-40 bg-cover object-cover rounded-t-2xl"
            />
          </div>
          <div>
            <p className="mb-1 text-left mx-2">{product.name}</p>
            {/* <h6 className="mt-0 mb-3">${product.date}</h6>
            <span
              className={`product-badge status-${product.category}`}
            >
              {product.category}
            </span> */}
          </div>
        </div>
      </div>
    );
  };

  const changeClassOfElement = () => {
    const element = document.querySelector(".carousel");
    const btnArrow = document.querySelector(".toggle-btn");
    if (element?.className?.includes("show")) {
      element?.classList?.remove("show");
      element?.classList?.add("hide");
      btnArrow?.classList?.add("active");
      return;
    }
    if (element?.className?.includes("hide")) {
      element?.classList?.remove("hide");
      element?.classList?.add("show");
      btnArrow?.classList?.remove("active");
      return;
    }
    if (
      !element?.className?.includes("hide") &&
      !element?.className?.includes("show")
    ) {
      element?.classList?.add("show");
      btnArrow?.classList?.remove("active");
      return;
    }
  };

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
      <section className="relative top-32 bg-red w-screen h-1/3 z-0 flex justify-between">
        <div className="w-56 text-right font-montserrat">
          <div className="flex justify-end items-center text-white px-6">
            <BsFillBrightnessHighFill className="mr-3" />
            <p>Weather</p>
          </div>
          <h2 style={{ fontSize: 60 }} className="font-chonburi text-white">
            {temperature}
          </h2>
          <hr className="w-full h-0.5 bg-white line-left" />
        </div>
        <div className="w-56">
          <div className="flex justify-start items-center text-white px-6">
            <BsClock className="mr-3" />
            <p className="font-montserrat">utc</p>
          </div>
          <h2 style={{ fontSize: 60 }} className="font-chonburi text-white">
            {time}
          </h2>
          <hr className="w-full h-0.5 bg-white line-right" />
        </div>
      </section>
      <section className="carousel w-screen h-3/5 absolute posicion-inicial left-0 bg-slate-600 animation flex flex-col items-center z-10">
        <a
          className="toggle-btn active"
          href="#"
          onClick={() => changeClassOfElement()}
        >
          <span className="arrow"></span>
        </a>
        <div className="carousel-demo">
          <div className="card">
            <Carousel
              value={data}
              numVisible={4}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              className="custom-carousel"
              circular
              autoplayInterval={3000}
              itemTemplate={productTemplate}
              header={
                <h3 className="font-montserrat text-white mx-2">
                  Mas informacion sobre el artico:{" "}
                </h3>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
