import { useState } from "react"
import styled from "styled-components"
import { PeopleInProximityInterFace } from "../Types"
import SearchBar from "./SearchBar"
import UsersDisplay from "./UsersDisplay"

       
const SideBar = ({peopleInProximity,setQueryingCoardinates,queryingCooardinates}:
    {peopleInProximity:Array<PeopleInProximityInterFace>;setQueryingCoardinates:Function;queryingCooardinates:{latitude:number|null,longitude:number|null}})=>{
    return( 
    <MapContainer>
        <SearchBar setQueryingCoardinates={setQueryingCoardinates}/>
        {queryingCooardinates.latitude&&
            <AddressDisplay>provided location: {queryingCooardinates.latitude},London UK</AddressDisplay>
        }
        {
         peopleInProximity.length>0&&
            <UsersDisplay peopleInProximity={peopleInProximity}/>
        }
    </MapContainer>
    )
}

export default SideBar

const MapContainer = styled.div`
  width:25vw;
  background:pink;
  display:flex;
  flex-direction:column;
`

const AddressDisplay = styled.h2`
    text-align:center;
    font-size:2rem;
`