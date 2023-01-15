import { IconButton} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import {useJsApiLoader, GoogleMap, Marker,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";


const center = {lat: -3.943549, lng: 39.745274}

function Maps() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  // const marks = [{ lat: -1.286389, lng: 36.817223 }, {lat: -4.043740, lng: 39.658871}, {lat: -0.717178, lng: 36.431026}]
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const url = "http://localhost:3000/alerts"
  const [pointer, setPointers] = useState([])

  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(json =>{
        setPointers(json) 
    })
}, [])
  
  if (!isLoaded) {
    return "hello";
  }


  return (
    <div>
      <div
      className="map-div"
        position="relative"
        display="flex"
        flexdirection="column"
        alignitems="center"
        bgColor="rgb(248, 240, 205)"
        // h="98vh"
        // w="100vw"
      >
        <div className="map-box">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={(map) => setMap(map)}
          >
            {/* <Marker position={center} /> */}

            {pointer.map((mark, index) => <Marker key={index} position={{lat: mark.lat, lng: mark.lng}} />)}
            <Marker position={center} />
          </GoogleMap>
        </div>
          <div className="map-center">
            <IconButton
            className="map-button"
              icon={<FaLocationArrow />}
              isRound
              onClick={() => map.panTo(center)}
            />
          </div>

      </div>
    </div>
  );
}

export default Maps