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

export interface LocationIQAPIResponse{
    place_id:String;
    licence:String;
    osm_type:String;
    osm_id:String;
    boundingbox:Array<String>;
    lat:number;
    lon:number;
    display_name:String;
    class:String;
    type:String;
    importance:number;
}