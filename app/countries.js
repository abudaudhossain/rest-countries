const loadCountriesInfo = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
    .catch(error => console.log(error))
}

const displayCountries = (countries) =>{
    // console.log(countries);

    const countryHTML = countries.map(country =>getCountryHTML(country));
    console.log(countryHTML[0]);
    const countriesContainer = document.getElementById("countries");
    countriesContainer.innerHTML = countryHTML.join(' ');
}
const getCountryHTML = country =>{
    return `
    <div class="country">
        <h2>${country.name}</h2>
        <p>${country.capital}</p>
        <img src="${country.flag}">
    </div>
    `;
}


loadCountriesInfo()