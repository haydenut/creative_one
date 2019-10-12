//HERE IS THE WEBSITE https://favqs.com/api
//YOU DO NOT NEED A KEY TO ACCESS THE DAILY QUOTES! 
//BUT IF YOU WANT TO DO OTHER STUFF THAT NEEDS A KEY, JUST SIGN UP!

function displaydata() {
        let results = "At the end of the day, you are solely responsible for your success and your failure. And the sooner you realize that, you accept that, and integrate that into your work ethic, you will start being successful. As long as you blame others for the reason you aren't where you want to be, you will always be a failure.";

  //TO FETCH CURRENT WEATHER
  const url = "http://data.orghunter.com/v1/charitybasic?user_key=470f1b9bd7cd31ecfa6bf174045272ed&ein=590774235";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      results = '<h2> Quote of the day: ' + "</h2>";
     });
      document.getElementById("getQuote").innerHTML = results;
};

