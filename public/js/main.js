const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');


const getInfo = async(event) =>{
    event.preventDefault(); /* will not reload website again and again*/
    // alert('hi');
    let cityVal = cityName.value;
    /* if search bar empty*/
    if(cityVal === ""){
        city_name.innerText = `Do some work atleast type the city name xD!!`
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=1b7c3b62a10175e8b3e0ee2cee8ffb31`;
            const response= await fetch(url); /*Async Await*/
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            // console.log(arrData);

            
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            
            const tempMood = arrData[0].weather[0].main;
            //condition to check sunny rainy or cloudy.
            if(tempMood == "Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style=' color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style=' color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-rain' style=' color: #a4b0be;'></i>";
            }else if(tempMood == "Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style=' color: #f1f2f6;'></i>";
            }

            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Please Enter the name correctly`;
            datahide.classList.add('data_hide');
        }
        
    }
}
submitBtn.addEventListener('click',getInfo);