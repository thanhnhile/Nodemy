const weather = document.querySelector('#weather')
const search = document.querySelector('.input-search')
const content = document.querySelector('.content')
const city = document.querySelector('.name .city')
const country = document.querySelector('.name .country')
const date = document.querySelector('.date')
const time = document.querySelector('.time')
const temperature = document.querySelector('.temperature .value')
const shortDesc = document.querySelector('.short-desc')
const visibility = document.querySelector('.visibility span')
const wind = document.querySelector('.wind span')
const cloud = document.querySelector('.cloud span')

//Lang nghe su kien search va goi Api
function changeWeatherCity(){
    let input = search.value.trim() || 'Ho Chi Minh'
    let today = new Date()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    fetch(url)
        .then(resp => resp.json())
        .catch(()=>{
            content.style.visibility ='hidden'
        })
        .then(data => {
            var desc = data?.weather[0] || 'None'
            city.textContent = data.name
            country.textContent = data.sys.country
            date.textContent = today.toLocaleDateString()
            time.textContent = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            shortDesc.innerHTML = desc.description
            visibility.innerHTML = data.visibility + ' (m)'
            wind.innerHTML = data.wind.speed + ' (m/s)'
            cloud.innerHTML = data.clouds.all + ' (%)'

            //Doi bg theo temp
            let temp = parseInt(data.main.temp)
            temperature.textContent = temp
            if(temp<18){
                weather.setAttribute('class','cold')
                weather.parentNode.style.backgroundImage="url('./images/cold.png')"
            }
            else{
               weather.setAttribute('class','hot')
               weather.parentNode.style.backgroundImage="url('./images/hot.png')"
            }
            
        }) 
}
document.addEventListener('keyup',(e)=>{
    if(e.keyCode==13){
        e.preventDefault()
        search.value.trim() ? changeWeatherCity() : alert('Please enter a city name!')
    }
})

changeWeatherCity()