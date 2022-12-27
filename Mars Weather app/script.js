// const API_KEY ='G5ZUe5JLbO2DKnBb6KKBSHge645OyrOuKfG4ufU5'; 
// const APIURL = '`://api.nasa.gov/insight_weather/?api_key=G5ZUe5JLbO2DKnBb6KKBSHge645OyrOuKfG4ufU5&feedtype=json&ver=1.0';
const API_KEY = 'G5ZUe5JLbO2DKnBb6KKBSHge645OyrOuKfG4ufU5';
const APIURL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`


// res means response here.
// res.json cvrt it into json file

getWeather();

function getWeather(){
    fetch(APIURL)
    .then(data =>{
        console.log(data);
        })
}



