// const axios = require("axios");
// const { UserModel } = require("../models/user.model");
// const fs = require("fs");

// // saved my personal googleAPI key on my local machine
// const googleApiKey = ''



// const turnToDataArr = (content) => {
//   const dataArr = [];
//   for (let value of content) {
//     const location = value.indexOf(",");
//     const name = value.substring(0, location).trim();
//     let adress = value.substring(location + 1, value.length).trim();
//     if (adress[0] === `"`) adress = adress.substring(1, adress.length);

//     if (adress[adress.length - 1] === `"`)
//       adress = adress.substring(0, adress.length - 1);

//     if (adress.substring(adress.length - 6, adress.length) === "London") {
//       adress = adress.substring(0, adress.length - 7);
//     }

//     dataArr.push([name, adress]);
//   }
//   return dataArr;
// };

const populateDB = async () => {
  return "ok"
  // const keyWords = [
  //   "street","court","hill","building","lane","place","avenue","road",
  //   "gate","str","tample","strand","yard","bridge","square","path","drive","crescent",
  //   "passage","row","way","buildings","station","Holborn","studio"
  // ];
  
  //   //data.csv was deleted from the Repo as requested
  // let content = fs.readFileSync("./data.csv", "utf8");
  
  // content = content.split("\n");

  // const dataArr = turnToDataArr(content);
  // try {
  //   for (let personArr of dataArr) {
  //     let [name, address] = personArr;
  //     address = `${address},London,UK`
  //     let locationIDAns = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&key=${googleApiKey}`)
  //     if(!locationIDAns.data.candidates.length){
  //         let fixedAddress = address;
  //         for(let keyWord of keyWords){
  //             const reg = new RegExp(keyWord,"i")
  //             const match  = address.match(reg)
  //             if(match) {
  //                 const toArr = match.input.split(" ")
  //                 const indexOfmatch = toArr.indexOf(match[0])
  //                 if(toArr[indexOfmatch-2]){
  //                   fixedAddress = toArr.slice(indexOfmatch-2,indexOfmatch+1);
  //                 }
  //                 if(toArr[indexOfmatch]===0){
  //                   fixedAddress = toArr.slice(0,2);
  //               }else{
  //                   fixedAddress = toArr.slice(indexOfmatch-1,indexOfmatch+1);
  //                 }
  //                 fixedAddress.join()
  //                 address = `${fixedAddress},London,UK`

  //             }
  //         }
  //         locationIDAns = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&key=${googleApiKey}`)

  //     }
  //     const locationID = locationIDAns.data.candidates[0].place_id;
  //     const LocationData = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${locationID}&key=${googleApiKey}`)
  //     const {result} = LocationData.data

  //     const user =await new UserModel({
  //       location:{
  //         geometry :{
  //           type: "Point",
  //           coordinates:[result.geometry.location.lng,result.geometry.location.lat]
  //         },
  //         properties:{
  //           userName:name,
  //           address:result.formatted_address,
  //           locationID
  //         }
  //       }
  //        })
  //       await user.save()
  //        console.log(user)
  //     }

  //      return "DB successfully populated";
  // } catch (e) {
  //   return {"an error occurred while populating the DB":e};
  // }

};

module.exports = {populateDB};
