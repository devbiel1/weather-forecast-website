const apiKey = '70512bad6a894339a2b185548250402';
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${"São Paulo"}&lang=pt`;

fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data)
        const tempNumberElement = document.getElementById("temp")
        const conditionTextElement = document.getElementById("condition")
        const humidityNumberElement = document.getElementById("humidity")
        const windNumberElement = document.getElementById("wind-speed")

        tempNumberElement.innerHTML = `${data.current.temp_c}<span style="font-size: 0.5em; vertical-align: super;">°c</span>`
        conditionTextElement.innerHTML = `${data.current.condition.text}`
        humidityNumberElement.innerHTML = `${data.current.humidity}%`
        windNumberElement.innerHTML = `${data.current.wind_kph}Km/h`
    })
