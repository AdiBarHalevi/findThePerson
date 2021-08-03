import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { directQueryTest, fetchQueryingUserGeoLocation, queryForPeopleInProximity } from "../globals/axiosCalls"
import { PeopleInProximityInterFace } from "../Types"
import Map from "./Map"
import SideBar from "./SideBar"


const parseProximityData = (peopleArr:any)=>{
    const parsedArr = peopleArr.map((person:any)=>{
        const [longitude,latitude] = person.location.geometry.coordinates
        const {userName,address,locationID} = person.location.properties
        return {longitude,latitude,userName,address,googleLocationID:locationID}
    })
    return parsedArr
}

const LocationAPI =()=>{
    const [queryingAddress,setQueryingAddress] = useState('')
    const [peopleInProximity,setPeopleInProximity] = useState<Array<PeopleInProximityInterFace>|[]>([])
    const [queryingCooardinates,setQueryingCoardinates] = useState<{latitude:number|null,longitude:number|null}>({latitude:null,longitude:null})

    useEffect(()=>{
        const testForHeroku =async()=>{
            let peopleArr = await directQueryTest(queryingAddress)
            if(peopleArr.length) {
                peopleArr = parseProximityData(peopleArr)
                setPeopleInProximity(peopleArr)
            }
        }
        testForHeroku()
        // const getCoordinates = async ()=>{
        //     const coordinatesObj = await fetchQueryingUserGeoLocation(queryingAddress) as any
        //     setQueryingCoardinates(coordinatesObj)
        // }
        // if(queryingAddress.length>0){
        //    getCoordinates()
        // }
    },[queryingAddress])

    // useEffect(()=>{
    //     const fecthPeopleInProximity = async (queryingCooardinates:{latitude:number|null,longitude:number|null})=>{
    //         const {longitude,latitude} = queryingCooardinates
    //         let peopleArr = await queryForPeopleInProximity(longitude,latitude) as any
    //         if(peopleArr.length) {
    //             peopleArr = parseProximityData(peopleArr)
    //             setPeopleInProximity(peopleArr)}
    //     }
    //     if(queryingCooardinates.longitude&&queryingCooardinates.latitude){
    //         fecthPeopleInProximity(queryingCooardinates)
    //     }
    // },[queryingCooardinates])

    

    return (
    <>
        <SideBar 
        peopleInProximity={peopleInProximity}
        setQueryingAddress={setQueryingAddress}
        queryingAddress={queryingAddress}
        />
        <Map
         peopleInProximity={peopleInProximity}
         />
    </>
    )
}

export default LocationAPI