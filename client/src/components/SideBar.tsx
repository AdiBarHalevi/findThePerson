import { useState } from "react"
import styled from "styled-components"
import { PeopleInProximityInterFace } from "../Types"
import SearchBar from "./SearchBar"
import UsersDisplay from "./UsersDisplay"


       
const SideBar = ({peopleInProximity,setQueryingAddress,queryingAddress}:
    {peopleInProximity:Array<PeopleInProximityInterFace>;setQueryingAddress:Function;queryingAddress:string})=>{
    return( 
    <MapContainer>
        <SearchBar setAdress={setQueryingAddress}/>
        {queryingAddress.length>0&&
            <AddressDisplay>provided location: {queryingAddress},London UK</AddressDisplay>
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