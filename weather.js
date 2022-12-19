var app = require('https');
var print = require('./affichage');

function get(city){

    var request = app.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=12a1ff79ee3888e79fee55cc5598ec2f',(response)=>{
        
        var body ='';
        response.on('data',(chunk)=>{
            body += chunk;
        })

        response.on('end',()=>{

            if(response.statusCode === 200){
                try{
                    var dataWeather = JSON.parse(body);
                    print.affichage(city,dataWeather.main.temp,dataWeather.main.pressure);
                }catch(error){
                    console.log(response.statusCode);
                    console.error(error.message);
                }
            }
            else{
                console.error('Impossible de récupérer les informations');
            }   
            //console.log(dataWeather.main.temp);
            //console.log(dataWeather.main.pressure);
        })
    })
}

module.exports.get = get;