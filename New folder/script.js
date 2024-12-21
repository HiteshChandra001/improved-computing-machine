// Initialize the map and set its view to Bilaspur, Chhattisgarh
const map = L.map('map').setView([22.0796, 82.1391], 13); // Bilaspur coordinates

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a popup that will be updated on hover
const popup = L.popup();

// Function to fetch place name using reverse geocoding
async function fetchPlaceName(lat, lng) {
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
  if (response.ok) {
    const data = await response.json();
    return data.display_name; // The place name from the API
  }
  return "Unknown Location";
}

// Event listener for mouse movement on the map
map.on('mousemove', async (e) => {
  const { lat, lng } = e.latlng; // Extract latitude and longitude
  const placeName = await fetchPlaceName(lat, lng); // Fetch the place name
  popup
    .setLatLng(e.latlng)
    .setContent(`<b>Place:</b> ${placeName}`)
    .openOn(map);
});
