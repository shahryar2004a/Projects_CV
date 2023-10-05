
const imageArray=['pic/b.jpg','pic/t.jpg','pic/p.jpg','pic/z.JPG'];

(function (){
   let randomIndex=Math.floor(Math.random()*imageArray.length);
   document.body.style.backgroundImage='url('+imageArray[randomIndex]+')';
})();

let $=document;
let input=$.querySelector('.search-box');
let searchBtn=$.querySelector('.search-btn');
let weather=$.querySelector('.weather');

// روش حل با آبجکت
// let citiesData={
//    tehran:{ city:'Tehran',temp:'10',weather:'Windy',humidity:'20%',windspeed:5},
//    shiraz:{ city:'Shiraz',temp:'5',weather:'cloudy',humidity:'10%',windspeed:4},
//    kermanshah:{ city:'Kermanshah',temp:'2',weather:'Windy',humidity:'30%',windspeed:3}
// }

// روش حل با آرایه
let citiesData=[
   { city:'tehran',temp:'10',weather:'Windy',humidity:'20%',windspeed:5},
   { city:'shiraz',temp:'5',weather:'cloudy',humidity:'10%',windspeed:4},
  { city:'kermanshah',temp:'2',weather:'Windy',humidity:'30%',windspeed:3}
]







searchBtn.addEventListener('click',search);

function search(){
     let inputValue=input.value;
    // let weathercity= citiesData[inputValue];


     let weathercity=citiesData.find(function(city){
        
      return city.city===inputValue
             
  })
console.log(weathercity)


     if(weathercity)
     {
      weather.style.maxHeight='200px';
      weather.style.visibility='visible';
      $.querySelector('.weather').classList.remove('loading')
      $.querySelector('.city').innerHTML='Weather in '+weathercity.city;
      $.querySelector('.temp').innerHTML=weathercity.temp +'°C';
      $.querySelector('.description').innerHTML=weathercity.weather;
      $.querySelector('.humidity').innerHTML='Humidity:'+weathercity.humidity;
      $.querySelector('.wind').innerHTML='Wind speed: '+weathercity.windspeed+'km/h';
     }else{
            alert("شهر موردنظر را به درستی وارد کنید")
     }

}