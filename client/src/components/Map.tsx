import styled from "styled-components"
import { PeopleInProximityInterFace, personInProximityInterFace } from "../Types"

const Map =(
    {peopleInProximity}:
    {peopleInProximity:Array<PeopleInProximityInterFace>;}
    )=>{
    return <MapContainer>map</MapContainer>
}

export default Map


const MapContainer = styled.div`
  width:75vw;
  background:green;
  display:flex;
  
`