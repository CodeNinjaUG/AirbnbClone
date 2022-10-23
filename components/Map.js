import React, { useState } from 'react'
import ReactMapGL ,{Marker,Popup} from 'react-map-gl';
import { getCenter } from 'geolib';
function Map({searchResults}) {
 const [selectedLocation , setSelectedLocation] = useState({

 });
//transform
const coordinates = searchResults.map(result =>({
     longitude:result.long,
     latitude:result.lat
}));
const center = getCenter(coordinates);
const [ viewport , setViewport] = useState({
    width:'100%',
    height:'100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 14
})
  return (
    <ReactMapGL
    mapStyle='mapbox://styles/segayi/cl9lnn9k100kx14pa9k9k6y2m'
    mapboxApiAccessToken={`process.env.mapbox_key`}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        {searchResults.map(result=>(
            <div key={result.long}>
                <Marker
                 longitude={result.long}
                 latitude={result.lat}
                 offsetTop={-10}
                 offsetLeft={-20}
                 >
                    <p onClick={() => setSelectedLocation(result)} className='cursor-pointer 
                       text-2xl animate-bounce'
                       aria-label='push-pin'
                       >  
                     </p>
                </Marker>

                {/* this is the popul */}
                {selectedLocation.long === result.long ? (
                    <Popup
                       onClose={() => setSelectedLocation({})}
                       closeOnClick={true}
                       latitude={result.lat}
                       longtitude = {result.long}
                    >
                        {result.title}
                    </Popup>
                   ):(
                    false
                   )}
            </div>
        ))}

    </ReactMapGL>
  );
}
export default Map
