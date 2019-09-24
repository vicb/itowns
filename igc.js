const fs = require('fs');
const IGCParser = require('igc-parser');

let result = IGCParser.parse(fs.readFileSync('Victor_2011-04-19.igc', 'utf8'));


const lat = [];
const lon = [];
const alt = [];

result.fixes.forEach(f => {
    lat.push(Number(f.latitude.toFixed(5)));
    lon.push(Number(f.longitude.toFixed(5)));
    alt.push(f.gpsAltitude);
});

const track = {lat, lon, alt};

console.log(JSON.stringify(track, 2));

