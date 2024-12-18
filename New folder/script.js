// Initialize the map and set its view
const map = L.map('map').setView([51.505, -0.09], 13); // [latitude, longitude], zoom level

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker at the specified location
const marker = L.marker([51.505, -0.09]).addTo(map);
marker.bindPopup('<b>Hello world!</b><br>This is a popup.').openPopup();

// Add a circle to the map
const circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

// Add a polygon to the map
const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);
polygon.bindPopup('This is a polygon.');

// Add an event listener for clicks on the map
map.on('click', (e) => {
  alert(`You clicked the map at ${e.latlng}`);
});
