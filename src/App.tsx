/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BsFillBrightnessHighFill, BsClock, BsArrowUp, BsArrowDown } from "react-icons/bs";
import moment from "moment";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

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

  const data = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
    },
    {
      id: "1001",
      code: "nvklal433",
      name: "Black Watch",
      description: "Product Description",
      image: "black-watch.jpg",
      price: 72,
      category: "Accessories",
      quantity: 61,
      inventoryStatus: "INSTOCK",
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Blue Band",
      description: "Product Description",
      image: "blue-band.jpg",
      price: 79,
      category: "Fitness",
      quantity: 2,
      inventoryStatus: "LOWSTOCK",
    },
    {
      id: "1003",
      code: "244wgerg2",
      name: "Blue T-Shirt",
      description: "Product Description",
      image: "blue-t-shirt.jpg",
      price: 29,
      category: "Clothing",
      quantity: 25,
      inventoryStatus: "INSTOCK",
    },
    {
      id: "1004",
      code: "h456wer53",
      name: "Bracelet",
      description: "Product Description",
      image: "bracelet.jpg",
      price: 15,
      category: "Accessories",
      quantity: 73,
      inventoryStatus: "INSTOCK",
    },
  ];

  const productTemplate = (product: any) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="mb-3">
            {/* <img src={`images/product/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" /> */}
          </div>
          <div>
            <h4 className="mb-1">{product.name}</h4>
            <h6 className="mt-0 mb-3">${product.price}</h6>
            <span
              className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}
            >
              {product.inventoryStatus}
            </span>
            <div className="car-buttons mt-5">
              <Button
                icon="pi pi-search"
                className="p-button p-button-rounded mr-2"
              />
              <Button
                icon="pi pi-star-fill"
                className="p-button-success p-button-rounded mr-2"
              />
              <Button
                icon="pi pi-cog"
                className="p-button-help p-button-rounded"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const changeClassOfElement = () => {
    const element = document.querySelector(".carousel");
    // console.log("element", element);
    if(element?.className?.includes('show')){
      console.log("tiene show");
      element?.classList?.remove('show');
      element?.classList?.add('hide');
      // setToggleIcon(true);
      return;
    }
    if(element?.className?.includes('hide')){
      console.log("tiene hide");
      element?.classList?.remove('hide');
      element?.classList?.add('show');
      // setToggleIcon(false);
      return;
    }
    if(!element?.className?.includes('hide') && !element?.className?.includes('show')){
      console.log("no tiene nada");
      element?.classList?.add('show');
      // setToggleIcon(false);
      return;
    }
  }

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
      <section className="carousel w-screen h-1/2 absolute -bottom-80 left-0 bg-slate-600 animation flex justify-center z-10">
        <div className="arrow" onClick={() => changeClassOfElement()}>
          <BsArrowUp className="text-white text-lg" />
        </div>
        <div className="carousel-demo">
          <div className="card">
            <Carousel
              value={data}
              numVisible={3}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              className="custom-carousel"
              circular
              autoplayInterval={3000}
              itemTemplate={productTemplate}
              header={
                <h5>Mas informacion sobre el artico: </h5>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
