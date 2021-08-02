const  axios  = require("axios");
const {UserModel} = require("../models/user.model")
const ApiKey = process.env.SERVER_GEOLOCATION_API_KEY

const fecthLocation = async (adress)=>{
    const Url = `http://api.positionstack.com/v1/forward?access_key=${ApiKey}&query=${adress},London,UK`
    try{
        const ans = await axios.get(Url)
        return ans.data

    }catch(e){
        console.log('error',e)
        return e
    }
}

const initiateDB = async()=>{
    const fs = require('fs'); 
    let  content = fs.readFileSync('./data.csv', 'utf8');
    content = content.split("\n")
    const dataArr = []
    for(let value of content){
        const location = value.indexOf(",")
        const name = value.substring(0,location).trim()
        let adress = value.substring(location+1,value.length).trim()
        if(adress[0]===`"`) adress = adress.substring(1,adress.length)
        
        if(adress[adress.length-1]===`"`) adress = adress.substring(0,adress.length-1)
        
        if(adress.substring(adress.length-6,adress.length)==="London") {adress = adress.substring(0,adress.length-7)}


        dataArr.push([name,adress])

    }
    try{
        for(let personArr of dataArr){
            const [name,adress] = personArr
            let {data} = await fecthLocation(adress)

            if(data[0]) data = data[0]

            if(data.length>1){
                data = data.find((item)=>item.locality === "London")
            }
            const user =await new UserModel({
                userName:name,
                adress:adress,
                neighbourhood:data.neighbourhood?data.neighbourhood:"null",
                latitude:data.latitude,
                longitude:data.longitude,
            })
            await user.save()
            console.log(user)
            
    
        }

    }catch(e){
        console.log(e)
    }
    
  
    
    // 
    // return user
    return "allgood"
        



}

module.exports = { fecthLocation,initiateDB };