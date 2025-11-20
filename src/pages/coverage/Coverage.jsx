import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude];

      mapRef.current.flyTo(coord, 14);
    }
  };

  const position = [23.8103, 90.4125];
  return (
    <div className="my-10  w-full h-[600px] border">
      <h1 className="text-5xl font-bold text-center">
        We have available in 64 districts
      </h1>

      <form onSubmit={handleSearch}>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
              
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow"
            placeholder="Search Location"
            name="location"
            
          />
        </label>
      </form>

      <MapContainer
        center={position}
        zoom={8}
        scrollWheelZoom={false}
        className="h-[600px]"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {serviceCenter.map((center) => (
          <Marker position={[center.latitude, center.longitude]}>
            <Popup>
              <strong>{center.district}</strong> <br /> Service Areea:{" "}
              {center.covered_area.join(" , ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Coverage;
