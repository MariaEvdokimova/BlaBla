import React, {useRef} from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import './MapBlock.scss';

const coordinates = [55.798682, 37.695816];

const mapData = {
    center: coordinates,
    zoom: 13,
};

// const myMap = useRef(null);
//
// const addRoute = (ymaps) => {
//     const pointA = coordinates;
//     const pointB = "Москва, метро Сокольники";
//
//     const multiRoute = new ymaps.multiRouter.MultiRoute(
//         {
//             referencePoints: [pointA, pointB],
//             params: {
//                 routingMode: "pedestrian"
//             }
//         },
//         {
//             boundsAutoApply: true
//         }
//     );
//
//     myMap.current.geoObjects.add(multiRoute);
// };

//                        instanceRef={ref => (this.myMap = ref)}
//                         modules={["multiRouter.MultiRoute"]}
//                         onLoad={addRoute}

export const MapBlock: React.FC = () => {
    return (
        <div className="map__canvas">
            <div className="map__caption">Map</div>
            <div className="map__data">
                <YMaps>
                    <Map
                        defaultState={ mapData }
                        width='456px' height='265px'>
                        <Placemark geometry={ coordinates } />
                    </Map>
                </YMaps>
            </div>
            </div>
    )
};