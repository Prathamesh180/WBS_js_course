import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {add} from 'ol/coordinate';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [8593339.569295587, 2357150.2036402575],
    zoom:4.8
  })
});

map.on('click', e => {
  console.log(e.coordinate);
})

// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//   enableHighAccuracy: true
// })

// // function setupMap(centerPosition){
// //   target: 'map',
// //   layers: [
// //     new TileLayer({
// //       source: new OSM()
// //     })
// //   ],
// //   view: new View({
// //     center: [22, 77],
// //     zoom: 5
// //   })
// // }

// function successLocation(position){
//   setupMap([position.coords.longitude, position.coords.latitude])
//   console.log(position);
// }

// function errorLocation(){
//   console.log("error");
// }
