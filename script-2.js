fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
  
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log(countriesWithLowPopulation);
  })
  .catch(error => {
    console.error('Error fetching countries:', error);
  });
