import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  const position = [36.31014735951382, 59.5040750683854];

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
          هاشمیه ۳۴ و ۳۶ پلاک ۲۸۰
          <br />
          طبقه سوم
          <br />
          واحد ۵
          <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
}
