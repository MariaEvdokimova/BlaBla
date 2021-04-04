import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import './MapBlock.scss';

const coordinates = [55.798682, 37.695816];

    const mapData = {
        center: coordinates,
        zoom: 13,
    };

export const MapBlock: React.FC = () => {
    return (
        <div className="map__canvas">
            <div className="map__caption">Map</div>
            <div className="map__data">
                <YMaps>
                    <Map
                        defaultState={ mapData }
                        width='100%'
                        height='100%'
                    >
                    <Placemark geometry={ coordinates } />
                </Map>
            </YMaps>
        </div>
        </div>
    )
};