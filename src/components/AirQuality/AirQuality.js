

import React, {useEffect, useRef, useState} from 'react';
import  mapboxgl from 'mapbox-gl';
import "./AirQuality.scss";
import "mapbox-gl/dist/mapbox-gl";


mapboxgl.accessToken="pk.eyJ1IjoiY2hlbGw5Mzg1IiwiYSI6ImNrZm8zbTF5aDBkejUyc3BjbzNtb3Y1aWcifQ.1Ia96l_PaYtTjQ6tWapUVA";

const AirQuality=()=>{
    const mapContainer=useRef(null);
    const[locationInfo]= useState({
        lng: 31,
		lat: 48.3,
		zoom: 5
    });

    useEffect(()=>{
        const map=new mapboxgl.Map({
            container:mapContainer.current,
            style: "mapbox://styles/mapbox/outdoors-v11",
            center:[locationInfo.lng, locationInfo.lat],
            zoom: locationInfo.zoom
        });
    },[])

    return(
        <section className={"air-q container"}>
            <h2 className="air-q-title">Индекс качества воздуха в режиме реального времени</h2>
            <div className="air-q-map" ref={mapContainer}/>
            <p className="air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
        </section>    
    );
};


export default AirQuality;
