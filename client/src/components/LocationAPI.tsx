import { useEffect } from "react";
import { useState } from "react";
import {
  fetchQueryingUserGeoLocation,
  queryForPeopleInProximity,
} from "../globals/axiosCalls";
import { Geolocation, LocationIQAPIResponse, PeopleInProximityInterFace, personInProximityInterFace } from "../Types";
import Map from "./mapComponents/Map";
import SideBar from "./SideBar";

const parseProximityData = (peopleArr: Array<personInProximityInterFace>) => {
  const parsedArr = peopleArr.map((person: personInProximityInterFace) => {
    const [longitude, latitude] = person.location.geometry.coordinates;
    const { userName, address, locationID } = person.location.properties;
    return {
      longitude,
      latitude,
      userName,
      address,
      googleLocationID: locationID,
    };
  });
  return parsedArr;
};

const LocationAPI = () => {
  const [queryingAddress, setQueryingAddress] = useState("");
  const [peopleInProximity, setPeopleInProximity] = useState<
    Array<PeopleInProximityInterFace> | []
  >([]);
  const [amountOfUsers,setAmountOfUsers]=useState(0)
  const [queryingCooardinates, setQueryingCoardinates] = useState<Geolocation>(
    {}
  );

  useEffect(() => {
    const compareWithGeoLocation = async (lat: string, lng: string,amountOfUsers:Number) => {
      let peopleArr = await queryForPeopleInProximity(lat, lng,amountOfUsers);
      if (peopleArr.length > 0) {
        peopleArr = parseProximityData(peopleArr);
        setPeopleInProximity(peopleArr);
      }
    };
    const { latitude, longitude } = queryingCooardinates;
    if (latitude && longitude) {
      let lat = latitude.toString();
      let lng = longitude.toString();
      compareWithGeoLocation(lat, lng,amountOfUsers);
    }
  }, [queryingCooardinates,amountOfUsers]);


  useEffect(() => {
    const getCoordinates = async () => {
      const responseObj = (await fetchQueryingUserGeoLocation(
        queryingAddress
      )) as {data:[LocationIQAPIResponse?]};
      const latitude = responseObj.data[0]?.lat;
      const longitude = responseObj.data[0]?.lon;
      setQueryingCoardinates({latitude,longitude});
    };
    if (queryingAddress.length>2) {
      getCoordinates();
    }
  }, [queryingAddress]);

  return (
    <>
      <SideBar
        peopleInProximity={peopleInProximity}
        queryingAddress={queryingAddress}
        setQueryingAddress={setQueryingAddress}
        setAmountOfUsers={setAmountOfUsers}
      />
      <Map
        peopleInProximity={peopleInProximity}
        queryingCooardinates={queryingCooardinates}
        queryingAddress={queryingAddress}
      />
    </>
  );
};

export default LocationAPI;
