export interface personInProximityInterFace {
  location: {
    geometry: {
      coordinates: Array<number>;
      type: string;
    };
    properties: {
      userName: string;
      address: string;
      locationID: string;
    };
  };
  _id: string;
}

export interface Geolocation {
  latitude?: number;
  longitude?: number;
}
export interface PeopleInProximityInterFace extends Geolocation {
  address: string;
  googleLocationID: string;
  userName: String;
}
