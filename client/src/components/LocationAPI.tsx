import { useEffect } from "react";
import { useState } from "react";
import {
  fetchQueryingUserGeoLocation,
  queryForPeopleInProximity,
} from "../globals/axiosCalls";
import { Geolocation, PeopleInProximityInterFace } from "../Types";
import Map from "./mapComponents/Map";
import SideBar from "./SideBar";

const parseProximityData = (peopleArr: any) => {
  const parsedArr = peopleArr.map((person: any) => {
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
  const [queryingCooardinates, setQueryingCoardinates] = useState<Geolocation>(
    {}
  );

  useEffect(() => {
    const compareWithGeoLocation = async (lat: string, lng: string) => {
      let peopleArr = await queryForPeopleInProximity(lat, lng);
      if (peopleArr.length > 0) {
        peopleArr = parseProximityData(peopleArr);
        setPeopleInProximity(peopleArr);
      }
    };
    const { latitude, longitude } = queryingCooardinates;
    if (latitude && longitude) {
      let lat = latitude.toString();
      let lng = longitude.toString();
      compareWithGeoLocation(lat, lng);
    }
  }, [queryingCooardinates]);

  useEffect(() => {
    fetchQueryingUserGeoLocation(queryingAddress);
    const getCoordinates = async () => {
      const coordinatesObj = (await fetchQueryingUserGeoLocation(
        queryingAddress
      )) as any;
      setQueryingCoardinates(coordinatesObj);
    };
    if (queryingAddress.length) {
      getCoordinates();
    }
  }, [queryingAddress]);

  return (
    <>
      <SideBar
        peopleInProximity={peopleInProximity}
        queryingAddress={queryingAddress}
        setQueryingAddress={setQueryingAddress}
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
