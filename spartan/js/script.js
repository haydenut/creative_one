//HERE IS THE WEBSITE https://favqs.com/api
//YOU DO NOT NEED A KEY TO ACCESS THE DAILY QUOTES! 
//BUT IF YOU WANT TO DO OTHER STUFF THAT NEEDS A KEY, JUST SIGN UP!





function displaydata() {
        let results = "";

  //TO FETCH CURRENT WEATHER
  const url = "https://favqs.com/api/qotd";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      results = '<h2> Quote of the day: ' + "</h2>";
     });
      document.getElementById("getQuote").innerHTML = results;
};

