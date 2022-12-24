const axios = require("axios");
const { UserDBModel } = require("../models/user-db-model");
const fs = require("fs");

const googleApiKey = proces.env.GOOGLE_API_KEY;

const keyWordsinStreetNames = [
  "street",
  "court",
  "hill",
  "building",
  "lane",
  "place",
  "avenue",
  "road",
  "gate",
  "str",
  "tample",
  "strand",
  "yard",
  "bridge",
  "square",
  "path",
  "drive",
  "crescent",
  "passage",
  "row",
  "way",
  "buildings",
  "station",
  "Holborn",
  "studio",
];

const readEntriesFromCSV = (fileName) => {
  const content = fs.readFileSync(fileName, "utf8");
  return content.split("\n");
};
const turnToDataArr = (content) => {
  const dataArr = [];
  for (let value of content) {
    const location = value.indexOf(",");
    const name = value.substring(0, location).trim();
    let address = value.substring(location + 1, value.length).trim();
    if (address[0] === `"`) address = address.substring(1, address.length);

    if (address[address.length - 1] === `"`)
      address = address.substring(0, address.length - 1);

    if (address.substring(address.length - 6, address.length) === "London") {
      address = address.substring(0, address.length - 7);
    }

    dataArr.push([name, address]);
  }
  return dataArr;
};
const saveModel = async (
  locationID,
  longitude,
  latitude,
  address,
  userName
) => {
  return await new UserDBModel({
    location: {
      geometry: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
      properties: {
        userName,
        address,
        locationID,
      },
    },
  });
};

const exportCSVToDB = async (fileName) => {
  //data.csv was deleted from the Repo as requested
  const rawUserEntries = readEntriesFromCSV(fileName);
  const dataArr = turnToDataArr(rawUserEntries);

  try {
    for (let personArr of dataArr) {
      let [userName, address] = personArr;
      address = `${address},London,UK`;
      let locationIDAns = await axios.get(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&key=${googleApiKey}`
      );
      if (!locationIDAns.data.candidates.length) {
        let fixedAddress = address;
        for (let keyWord of keyWordsinStreetNames) {
          const reg = new RegExp(keyWord, "i");
          const match = address.match(reg);
          if (match) {
            const toArr = match.input.split(" ");
            const indexOfmatch = toArr.indexOf(match[0]);
            if (toArr[indexOfmatch - 2]) {
              fixedAddress = toArr.slice(indexOfmatch - 2, indexOfmatch + 1);
            }
            if (toArr[indexOfmatch] === 0) {
              fixedAddress = toArr.slice(0, 2);
            } else {
              fixedAddress = toArr.slice(indexOfmatch - 1, indexOfmatch + 1);
            }
            fixedAddress.join();
            address = `${fixedAddress},London,UK`;
          }
        }
        locationIDAns = await axios.get(
          `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&key=${googleApiKey}`
        );
      }
      const locationID = locationIDAns.data.candidates[0].place_id;
      const LocationData = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${locationID}&key=${googleApiKey}`
      );
      const { result } = LocationData.data;
      const longitude = result.geometry.location.lng;
      const latitude = result.geometry.location.lat;
      const user = await saveModel(
        locationID,
        longitude,
        latitude,
        address,
        userName
      );
      await user.save();
    }

    return "DB successfully populated";
  } catch (e) {
    return { "an error occurred while populating the DB": e };
  }
};
