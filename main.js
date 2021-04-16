 const api = {
     key: "b1fc43ba5a0674d42248f3673858d05d",
     baseurl: 'https://api.openweathermap.org/data/2.5/'
 }

 const searchbox = document.querySelector('.search-box');
 searchbox.addEventListener('keypress', setQuery);

 function setQuery(evt) {
     if(evt.keyCode == 13) {
         getResults(searchbox.value);
        //  console.log(searchbox.value);
     }
 }

//  function getResults (query) {
//     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//     .then( weather => {
//         return weather.json();
//     }).then(displayResults);
//  }

function getResults (query) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}`)
        .then( weather => {
            console.log(query)
            return weather.json();
        })
        .then(displayResults);
     }

 function displayResults(weather) {
    console.log(weather)
  }