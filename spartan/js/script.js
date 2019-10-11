//HERE IS THE WEBSITE https://favqs.com/api
//YOU DO NOT NEED A KEY TO ACCESS THE DAILY QUOTES! 
//BUT IF YOU WANT TO DO OTHER STUFF THAT NEEDS A KEY, JUST SIGN UP!

document.getElementById("getQuote").addEventListener("click", function(event) {
  
  //TO FETCH CURRENT WEATHER
  const url = "https://favqs.com/api/qotd";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "";
      results += '<h2>Weather in ' + json.quote + "</h2>";
     });
      
      results += "</p><hr/ style='border: 2px solid white'>";
      document.getElementById("getQuote").innerHTML = results;
    
  

});

