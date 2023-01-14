// import { ChakraProvider, theme } from "@chakra-ui/react";
// import {
//   Box,
//   Flex,
//   HStack,
//   IconButton,
// } from "@chakra-ui/react";
// import { FaLocationArrow, FaTimes } from "react-icons/fa";
// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
// import React, { useRef, useState } from "react";

// const center = { lat: -1.286389, lng: 36.817223 };
// function Maps() {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries: ["places"],
//   });
//   console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

//   const [map, setMap] = useState(/** @type google.maps.Map */ (null));
//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [distance, setDistance] = useState("");
//   const [duration, setDuration] = useState("");

//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const originRef = useRef();

//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const destinationRef = useRef();
//   if (!isLoaded) {
//     return "hello";
//   }

//   async function calculateRoutes() {
//     console.log("hello there");
//     if (originRef.current.value === "" || destinationRef.current.value === "") {
//       return;
//     }
//     // eslint-disable-next-line no-undef
//     const directionsService = new google.maps.DirectionsService();
//     const results = await directionsService.route({
//       origin: originRef.current.value,
//       destination: destinationRef.current.value,
//       // eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING,
//     });
//     setDirectionsResponse(results);
//     setDistance(results.routes[0].legs[0].distance.text);
//     setDuration(results.routes[0].legs[0].duration.text);
//   }

//   return (
//     <ChakraProvider theme={theme}>
//       <Flex
//         position="relative"
//         flexDirection="column"
//         alignItems="center"
//         bgColor="rgb(248, 240, 205)"
//         h="98vh"
//         w="100vw"
//       >
//         <Box position="absolute" left={0} top={3} h="100%" w="100%">
//           <GoogleMap
//             center={center}
//             zoom={15}
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             onLoad={(map) => setMap(map)}
//           >
//             <Marker position={center} />

//             {directionsResponse && (
//               <DirectionsRenderer directions={directionsResponse} />
//             )}
//           </GoogleMap>
//         </Box>
//           <HStack spacing={4} mt={4} justifyContent="space-between">
//             <IconButton
//               bgColor="white"
//               aria-label="center back"
//               icon={<FaLocationArrow />}
//               isRound
//               onClick={() => map.panTo(center)}
//             />
//           </HStack>

//       </Flex>
//     </ChakraProvider>
//   );
// }

// export default Maps;
