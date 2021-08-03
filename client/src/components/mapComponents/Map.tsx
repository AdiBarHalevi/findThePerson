import styled from "styled-components"
import { Geolocation, PeopleInProximityInterFace } from "../../Types"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "../../../node_modules/leaflet/dist/leaflet.css"
import 'leaflet/dist/leaflet.css';
import { markerIcon } from "./MapMarker";


const Map =(
    {peopleInProximity, queryingCooardinates}:
    {peopleInProximity:Array<PeopleInProximityInterFace>; queryingCooardinates: Geolocation}
    )=>{
    return (
      
        <MapPageContainer id="mapid">
        <MapContainer style={{height:'100%',width:"90vw"}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

{
  queryingCooardinates.latitude && queryingCooardinates.longitude &&
<Marker
icon={markerIcon}
      position={{
        lat: queryingCooardinates.latitude,
        lng:queryingCooardinates.longitude,
      }}
      >
    </Marker>
}
          
        </MapContainer>
        </MapPageContainer>
    )
}

export default Map


const MapPageContainer = styled.div`
  width:75vw;
  height:100vh;
  display:flex;
  
`