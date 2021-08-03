import styled from "styled-components"
import { PeopleInProximityInterFace } from "../Types"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "../../node_modules/leaflet/dist/leaflet.css"
const Map =(
    {peopleInProximity}:
    {peopleInProximity:Array<PeopleInProximityInterFace>;}
    )=>{
    return (
        <MapPageContainer>
        <MapContainer style={{height:'100%',width:"90vw"}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br/> Easily customizable.
            </Popup>
          </Marker>
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