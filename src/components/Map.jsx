import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  const position = [36.31014735951382, 59.5040750683854]; // example: Tehran coordinates

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "250px", width: "100%", borderRadius: "12px" }}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          کلینیک روان درمانی دکتر مروی
          <br />
          <a href="tel:+985138888888" className="text-primary underline">
            0513888888
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
