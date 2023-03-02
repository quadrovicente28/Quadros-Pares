
mapboxgl.accessToken = 'pk.eyJ1IjoiamRoZW52aXIiLCJhIjoiY2xkYWN5NWdpMDh3MDNvcDY2bHNxamhuaSJ9.xAyW-Lu074W4EKUMdEnEZw';
const bounds = [
    [119.968235, 13.517080], // Southwest coordinates
    [122.006774, 15.552100] // Northeast coordinates
    ];
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    // style: 'mapbox://styles/jdhenvir/cldafjtju000601o7bc6v6qtd',
    center: [120.9818161, 14.5358591],
    zoom: 15.5,
    pitch: 30,
    // bearing: 5,
    // maxBounds: bounds, // Set the map's geographical boundaries.
    antialias: true
});

const layerList = document.getElementById('map-menu');
const inputs = layerList.getElementsByTagName('input');
 
for (const input of inputs) {
input.onclick = (layer) => {
const layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
};
}

map.on('style.load', () => {
    // Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
    (layer) => layer.type === 'symbol' && layer.layout['text-field']
    ).id;
     
    // The 'building' layer in the Mapbox Streets
    // vector tileset contains building height data
    // from OpenStreetMap.
    map.addLayer(
    {
    'id': 'add-3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
    'fill-extrusion-color': '#aaa',
     
    // Use an 'interpolate' expression to
    // add a smooth transition effect to
    // the buildings as the user zooms in.
    'fill-extrusion-height': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'height']
    ],
    'fill-extrusion-base': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'min_height']
    ],
    'fill-extrusion-opacity': 0.6
    }
    },
    labelLayerId
    );
    });

// add map marker for store location

    const el = document.createElement('div');
    const width = 40;
    const height = 40;
    el.className = 'marker';
    el.style.backgroundImage = `url(./asset/pinpoint.png)`;
    el.style.width = `40px`;
    el.style.height = `40px`;
    el.style.backgroundSize = '100%';

    new mapboxgl.Marker(el)
    .setLngLat([120.9818161, 14.5358591])
    .addTo(map);