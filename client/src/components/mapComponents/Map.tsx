import styled from "styled-components";
import { Geolocation, PeopleInProximityInterFace } from "../../Types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import { getMarker } from "./MapMarker";
import markerRed from "../../assets/markerRed.svg";
import markerBlue from "../../assets/markerBlue.svg";


const Map = ({
  peopleInProximity,
  queryingCooardinates,
  queryingAddress
}: {
  peopleInProximity: Array<PeopleInProximityInterFace>;
  queryingCooardinates: Geolocation;
  queryingAddress: string
}) => {
  return (
    <MapPageContainer id="mapid">
      <MapContainer
        style={{ height: "100%", width: "90vw" }}
        center={[51.5074, -0.078]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {peopleInProximity.length > 0 &&
          peopleInProximity.map(
            (location) =>
              location.latitude &&
              location.longitude && (
                <Marker
                  icon={getMarker(markerBlue)}
                  position={{
                    lat: location.latitude,
                    lng: location.longitude,
                  }}
                >
                  <Popup position={{
                    lat: location.latitude,
                    lng: location.longitude,
                  }}>
                    {location.address}
                  </Popup>
                </Marker>
              )
          )}
        {queryingCooardinates.latitude && queryingCooardinates.longitude && (
          <Marker
            icon={getMarker(markerRed)}
            position={{
              lat: queryingCooardinates.latitude,
              lng: queryingCooardinates.longitude,
            }}
          ><Popup  position={{
            lat: queryingCooardinates.latitude,
            lng: queryingCooardinates.longitude,
          }}>
{queryingAddress}
          </Popup></Marker>
        )}
      </MapContainer>
    </MapPageContainer>
  );
};

export default Map;

const MapPageContainer = styled.div`
  width: 75vw;
  height: 100vh;
  display: flex;
`;
