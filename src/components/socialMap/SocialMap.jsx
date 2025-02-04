import React, { useEffect } from "react";
import "./socialMap.scss";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import LeafletMap from "../../components/LevantLocation/LevantLocation";

const SocialMap = () => {
  useEffect(() => {
    // Configure default Leaflet icon
    const DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <div className="social-map" data-aos="fade-right" data-aos-duration="2000">
      <div className="social-media">
        <p>لوانت در شبکه های اجتماعی</p>
        <a
          href="https://www.linkedin.com/company/levantsio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-linkedIn"></span>
        </a>
      </div>

      <div className="mapContainer">
        <LeafletMap
          position={[52, -0.5]}
          zoom={8}
          markerText="Hello, this is a marker"
        />
      </div>
    </div>
  );
};

export default SocialMap;
