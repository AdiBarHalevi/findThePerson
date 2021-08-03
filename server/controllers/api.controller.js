const axios = require("axios");
const ApiKey = process.env.SERVER_GEOLOCATION_API_KEY;
const { UserModel } = require("../models/user.model");

const findPeopleInProximity =async(longitude,latitude)=>{
  try{
      const ans = await UserModel.find({
        'location.geometry.coordinates': {$near : {$geometry: {type: "Point", coordinates: [longitude,latitude]}}}
      }).limit(3)
    
      return ans 
  }catch(e){
    return {error:e}
  }
}

const findQueryingUserCoordinates = async (address)=>{
  
  const Url =`http://api.positionstack.com/v1/forward?access_key=${ApiKey}& query=${address}&region=London`
  try {
    const ans = await axios.get(Url);
    if(!ans.data.data[0]) throw new Error("can't fecth querying location")
    return ans.data.data[0];
  } catch (e) {
    return {error:"can't fecth querying location"}
  }

}


const convertLocationAndDiscoverNearByUsers = async (address) => {
    try {
      const queringLocationObj = await findQueryingUserCoordinates(address)
      const {longitude,latitude} = queringLocationObj
      return await findPeopleInProximity(longitude,latitude)
    } catch (e) {
      return {error:e}
    }
  };
  
  
const findPeopleByGeoLocation = async (longitude,latitude) => {
    try {
      return await findPeopleInProximity(longitude,latitude)
    } catch (e) {
      return {error:e}
    }
  };
  
  

  module.exports = {convertLocationAndDiscoverNearByUsers,findPeopleByGeoLocation};