var weather = require('./weather');
//var cities = process.argv.slice(2);
var cities = ['Rabat','Paris','New York','Doha'];

cities.forEach((city)=>{
    weather.get(city);
})



