import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import { FcSearch } from "react-icons/fc";
import "./Main.css";
import SideBar from "./SideBar";
import Login from "./Login";
import ModalLogin from "./ModalLogin";
function Main() {
  // =====================================================================
  // MAP
  // Access tokens of Mapbox
  mapboxgl.accessToken =
    "pk.eyJ1IjoidGh1YW5oYWluZSIsImEiOiJjbGh2aDhxenYwODltM2VsaWV3bnhkdWo2In0.4TisrSRmRpWlArqT80zIgg";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(106.70597735980562); //lng is longitude (Kinh do) 106.70597735980562
  const [lat, setLat] = useState(10.774072864490975); //lat is latitude (Vi do) 10.774072864490975
  const [zoom, setZoom] = useState(3);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      // style: "mapbox://styles/mapbox/navigation-night-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    // Add the control to the map.
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: "Where to ?",
    });
    map.current.addControl(geocoder);
  });

  // =====================================================================
  // MODAL
  //
  const [modalOpen, setModaOpen] = useState(false);

  // Handle Modal Login
  const handleShowmodalLogin = () => {
    setModaOpen(!modalOpen);
    console.log("Modal: ", modalOpen);
  };

  return (
    <>
      <div ref={mapContainer} className="map-container h-screen">
        <SideBar />

        <div className="absolute top-[30px] right-3 z-10 bg-[#ffffff] shadow-lg rounded-lg items-center hover:bg-[#e8e8ff]">
          <button
            className=" px-4 py-2 text-lg"
            onClick={() => handleShowmodalLogin()}
          >
            Login
          </button>
        </div>
        {/* <Login onHandleShowModal={() => handleShowmodalLogin} /> */}
        {modalOpen ? (
          <ModalLogin onHandleShowModal={() => handleShowmodalLogin} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Main;
