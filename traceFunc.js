//before using this, make sure stellarium is downloaded and running on your computer
//then in stellerium press f2 to open settings
//then go to plugins and navigate to remote control then tick load at startup
//then restart stellarium
//then go to http://localhost:8090/api/objects/info?name=leo&format=json to test that it works

function traceDiv() {
    document.getElementById('form').style.display = "block";
    document.getElementById('homepage').style.display = "none";
    document.getElementById('planet').style.display = "none";
 }

function homeDiv() {
    document.getElementById('form').style.display = "none";
    document.getElementById('homepage').style.display = "block";
    document.getElementById('planet').style.display = "none";
    }
    

var planet = "Earth";
//redefine planet variable to the value of the input field

var URL = "http://localhost:8090/api/objects/info?name="+planet+"&format=json";


//function to get the data from the api and display it on the page
//this function caauses the page to crash
//to fix this, you need to use a chrome extension called "Who CORS?" to bypass the CORS error


let fetchRes = fetch(URL);
        fetchRes.then(res =>
            res.json()).then(data => {
                console.log(data)
                //display the data on the page
                document.getElementById("planetName").innerHTML = data.name;
        })
        .catch(error => console.log(error));


function planetDiv() {
    document.getElementById('form').style.display = "none";
    document.getElementById('homepage').style.display = "none";
    
    document.getElementById('planet').style.display = "block";
    }





