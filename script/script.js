function buscar() {
    var searchValue = document.getElementById('searchInput').value.trim();

    if (searchValue === "") {
        alert("Digite uma cidade válida!");
        return;
    }

    const apiKey = '70512bad6a894339a2b185548250402';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchValue}&lang=pt`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar dados. Verifique o nome da cidade.");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            
            document.getElementById("temp").innerHTML = `${data.current.temp_c}<span style="font-size: 0.5em; vertical-align: super;">°C</span>`;
            document.getElementById("condition").innerHTML = data.current.condition.text;
            document.getElementById("humidity").innerHTML = `${data.current.humidity}%`;
            document.getElementById("wind-speed").innerHTML = `${data.current.wind_kph} Km/h`;

        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
            alert("Não foi possível obter os dados. Verifique o nome da cidade e tente novamente.");
        });
}