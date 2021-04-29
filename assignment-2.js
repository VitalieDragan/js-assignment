const srcBar = document.querySelector('#input');
const btn = document.querySelector('#btn');


    //event
btn = addEventListener('click', srcCountry)

function srcCountry(event) {

}

    // Get list of all countries
class srcCountry {
    getAllCountries() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json()).then(data => data.map(country => {
            console.log(country.name)
        }))
    }


    getCountryByName(name) {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json()).then(data => data.map(country => {
        console.log(country.name)
    }))
    }

}

const country = new Country()
country.getCountryByName("Moldova")
// country.getAllCountries()














// class Country {
//     constructor (baseurl) {
//         this.baseurl = baseurl;
//     }
//     getAllCountry(){
//         fetch(baseurl)
//         .then(response => response.json()).then(data => data.map(country => {
//             console.log(country.name);
//         }))
//     }
//     getCountryByName(name){
//         fetch(`baseurl${name}`)
//         .then(response => response.json()).then(data => data.map(country => {
//             console.log(country.name);
//         }))
//     }
// }

// const country = new Country("https://restcountries.eu/rest/v2/")
// country.getCountryByName("Finland")