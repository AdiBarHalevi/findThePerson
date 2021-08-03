import L from "leaflet";

export const getMarker = (logo: string) => L.icon({
  iconUrl: logo,
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: "my-icon-shadow.png",
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});
