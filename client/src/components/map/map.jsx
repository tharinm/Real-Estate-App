import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/pin";

const position = [6.0329, 80.2168];
function Map({ items }) {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
      <Pin />
    </MapContainer>
  );
}

export default Map;
