import React from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "/brazil-states.geojson";

const markers = [
  { markerOffset: 25, name: "Paraná", coordinates: [-52.681080, -26.216468] as [number, number] },
  
 
];

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 15, 0],
        scale: 1000
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#eaeaec14"
              stroke="#00000049"
              style={{
                default: {
                    outline: 'none'
                },
                hover: {
                    outline: 'none'
                },
                pressed: {
                    outline: 'none'
                }
            }}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#ffffff64" stroke="#9b0dfa26" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontWeight: "bold" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
