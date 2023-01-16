import { IconButton} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import {useJsApiLoader, GoogleMap, Marker, OverlayView
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
  const url = "https://report-production-8d93.up.railway.app/alerts"
  const [pointer, setPointers] = useState([])
  const [show, setShow] = useState([])

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

//   function details(id){
//     useEffect(()=>{
//         fetch(url)
//         .then(res=>res.json())
//         .then(json =>{
//             setPointers(json) 
//         })
//     }, [])
//   }

  return (
    <div>
      <div
      className="map-div"
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
            {/* <div className="map-hover">hello</div> */}
            <IconButton
            className="map-button"
              icon={<FaLocationArrow />}
              isRound
              onClick={() => map.panTo(center)}
            />
          </div>
          {/* <div className="center-map"> */}
            {/* <div className="map-hover">hello</div> */}
            {/* <IconButton
            className="button-map"
            {<Overlay />}
              icon={<FaTimes />}
              
            /> */}
          {/* </div> */}
          <OverlayView position={center}>
                <div>
                    <h1>hello</h1>
                </div>
          </OverlayView> 
          {/* <div className="map-hover">
            <img src="https://images.unsplash.com/photo-1673845861099-2785734e247c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="image" /> 
            <h3>title</h3>
          </div> */}

      </div>
    </div>
  );
}

export default Maps