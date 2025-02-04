import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet's CSS is included

const LeafletMap = () => {
  const position = [35.73864567466264, 51.41503410353816];

  if (typeof window !== "undefined") {
    return (
      <div style={{ width: "100%", height: "400px" }}>
        {" "}
        {/* Ensure parent container size */}
        <MapContainer
          center={position}
          zoom={16}
          className="map-container"
          style={{ width: "100%", height: "100%" }} // Map fills its parent
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>{"شرکت لوانت"}</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  } else return <></>;
};

export default LeafletMap;
