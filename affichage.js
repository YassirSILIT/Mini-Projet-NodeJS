function affichage (city , temperature , pressure){
    console.log('À ' + city + ', la temperature est de ' + (temperature-273.15).toFixed(2) + '°C et la pression est de ' +pressure + 'hPA');
}

module.exports.affichage = affichage;