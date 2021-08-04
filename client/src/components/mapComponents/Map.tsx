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
        style={{ height: "100%", width: "100%" }}
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
            (location,i) =>
              location.latitude &&
              location.longitude && (
                <Marker
                  key={location.latitude}
                  icon={getMarker(markerBlue)}
                  position={{
                    lat: location.latitude,
                    lng: location.longitude,
                  }}
                >
                  <Popup
                   key={location.address}
                   position={{
                    lat: location.latitude,
                    lng: location.longitude,
                  }}>
                    <PopUpText>
                      {location.userName}<br/>
                      {location.address}
                    </PopUpText>
                  </Popup>
                </Marker>
              )
          )}
        {queryingCooardinates.latitude && queryingCooardinates.longitude && (
          <Marker
            key={queryingCooardinates.latitude}
            icon={getMarker(markerRed)}
            position={{
              lat: queryingCooardinates.latitude,
              lng: queryingCooardinates.longitude,
            }}
          ><Popup
            key={queryingCooardinates.longitude}
            position={{
            lat: queryingCooardinates.latitude,
            lng: queryingCooardinates.longitude,
          }}>
            <PopUpText>
                {queryingAddress}
            </PopUpText>
          </Popup></Marker>
        )}
      </MapContainer>
    </MapPageContainer>
  );
};

export default Map;

const MapPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const PopUpText = styled.p`
  font-size:1.2rem;
  text-align:center;

`