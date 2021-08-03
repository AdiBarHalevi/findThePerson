export interface personInProximityInterFace{
    location: {
        geometry:{
            coordinates:Array<number>
            ,
                type: string
            },
        properties: {
            userName: string,
            address: string,
            locationID:string
            }
        },
        _id: string,
}

export interface PeopleInProximityInterFace{
         address:string;
         googleLocationID:string;
         latitude:Number;
         longitude:Number;
         userName:String;
}

export interface Geolocation {latitude?:number,longitude?:number}