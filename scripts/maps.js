//Map for Canada
var map_Canada = L.map('map_Canada').
  setView([45.46522218037267, -73.56662132883577],
  15);

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 20
    }).addTo(map_Canada);

  L.control.scale().addTo(map_Canada);
  L.marker([45.46522218037267, -73.56662132883577],{draggable: false}).addTo(map_Canada);


//Map for Australia
var map_Australia = L.map('map_Australia').
  setView([-30.32881972013307, 149.78830427301463],
  15);

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 20
    }).addTo(map_Australia);

  L.control.scale().addTo(map_Australia);
  L.marker([-30.32881972013307, 149.78830427301463],{draggable: false}).addTo(map_Australia);


//Map for UK
var map_UK = L.map('map_UK').
  setView([53.71058012693805, -1.34153472328457],
  15);

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 20
    }).addTo(map_UK);

  L.control.scale().addTo(map_UK);
  L.marker([53.71058012693805, -1.34153472328457],{draggable: false}).addTo(map_UK);