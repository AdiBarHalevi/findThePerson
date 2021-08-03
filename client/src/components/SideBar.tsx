import styled from "styled-components"
import { PeopleInProximityInterFace } from "../Types"
import ProvideAdress from "./ProvideAdress"
import UsersDisplay from "./UsersDisplay"

       
const SideBar = ({peopleInProximity,queryingAddress,setQueryingAddress}:{
        peopleInProximity:Array<PeopleInProximityInterFace>;
        queryingAddress:string,
        setQueryingAddress:Function
    })=>{
    return( 
    <MapContainer>
        <ProvideAdress setQueryingAddress={setQueryingAddress} />

        {queryingAddress.length&&
            <AddressDisplay>provided location: {queryingAddress}</AddressDisplay>
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