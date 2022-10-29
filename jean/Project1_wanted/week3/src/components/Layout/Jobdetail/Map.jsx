import React from 'react';
import { useEffect, useState } from 'react';

import markericon from '../../../images/marker.png';
const { naver } = window;

const Map = () => {
    useEffect(() => {
        const container = document.getElementById('map'); // 지도를 표시할 div // let markerList = []; // const HOME_PATH = window.HOME_PATH || '.';
        const position = new naver.maps.LatLng(37.3595704, 127.105399);
        const mapOptions = {
            center: position,
            zoom: 17,
        };
        const map = new naver.maps.Map(container, mapOptions);

        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.3595704, 127.105399),
            map: map,
            icon: {
                url: markericon,
            },
        });
    }, []);

    return <div id="map" />;
};

export default Map;
