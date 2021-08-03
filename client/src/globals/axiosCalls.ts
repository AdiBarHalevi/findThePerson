import axios from "axios"
const ApiKey = "pk.b43071c54298ea6e02c69c3ccbe2ad0f"

const axiosInstance = axios.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? `https://find-the-person.herokuapp.com/`
        : `http://localhost:8000/`,
  });

export const directQueryTest = async(adress:string)=>{
    try{
        const url = `/query/findPeopleNearMe/${adress}`
        const ans = await axiosInstance.get(url)
        return ans.data

    }catch(e){
        return []
    }

}

export const queryForPeopleInProximity = async (latitude:string,longitude:string)=>{
    try{
        const url = `/query/findPeopleByGeoLocation/${longitude}/${latitude}`
        const ans = await axiosInstance.get(url)
        return ans.data

    }catch(e){
        return []
    }
}

// export const fetchQueryingUserGeoLocation = async (queryingAddress:string)=>{
//     const url = `http://api.positionstack.com/v1/forward?access_key=${ApiKey}&query=${queryingAddress}&region=London&limit=1&country =UK`
//     try{
//         const ans = await axios.get(url) as any
//         const latitude = ans.data.data[0].latitude
//         const longitude= ans.data.data[0].longitude
//         return {latitude,longitude}

//     }catch(e){
//         return []
//     }
// }

export const fetchQueryingUserGeoLocation = async (queryingAddress:string)=>{
    const url = `https://us1.locationiq.com/v1/search.php?key=${ApiKey}&q=${queryingAddress}&bounded=1&limit=1&countrycodes=GB&namedetails=1&format=json
    `
    try{
        const ans = await axios.get(url) as any
        const latitude = ans.data[0].lat
        const longitude= ans.data[0].lon
        return {latitude,longitude}

    }catch(e){
        return []
    }
}

