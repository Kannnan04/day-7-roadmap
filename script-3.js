fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
 
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg); 
    
    });
  })
  .catch(error => {
    console.error('Error fetching countries:', error);
  });
