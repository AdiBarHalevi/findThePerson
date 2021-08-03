import axios from "axios"
const ApiKey = "48fc0135ad9022272c1c29a82e32d031"

const axiosInstance = axios.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? `https://find-the-person.herokuapp.com/`
        : `http://localhost:8000/`,
  });
  

export const queryForPeopleInProximity = async (latitude:number|null,longitude:number|null)=>{
    try{
        const url = `/query/findPeopleByGeoLocation/${longitude}/${latitude}`
        const ans = await axiosInstance.get(url)
        return ans.data

    }catch(e){
        return []
    }
}

export const fetchQueryingUserGeoLocation = async (queryingAddress:string)=>{
    const url = `http://api.positionstack.com/v1/forward?access_key=${ApiKey}&query=${queryingAddress}&region=London&limit=1&country =UK`
    try{
        const ans = await axios.get(url) as any
        const latitude = ans.data.data[0].latitude
        const longitude= ans.data.data[0].longitude
        return {latitude,longitude}

    }catch(e){
        return []
    }
}

