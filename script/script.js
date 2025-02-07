function buscar(event) {

    // impede que o formulario carregue a pagina;
    if (event) event.preventDefault();

    var searchValue = document.getElementById('searchInput').value.trim();

    if (searchValue === "") {
        alert("Por favor, digite uma cidade!");
        return;
    }

    const apiKey = '70512bad6a894339a2b185548250402';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchValue}&lang=pt`;

    console.log(url)

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar dados. Verifique o nome da cidade.");
            }
            return response.json();
        })
        .then(data => {

            document.getElementById("temp").innerHTML = `${data.current.temp_c}<span style="font-size: 0.5em; vertical-align: super;">°C</span>`;
            document.getElementById("condition").innerText = data.current.condition.text;
            document.getElementById("humidity").innerText = `${data.current.humidity}%`;
            document.getElementById("wind-speed").innerText = `${data.current.wind_kph} Km/h`;

            document.getElementById("weatherIcon").src = data.current.condition.icon;
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
            alert("Não foi possível obter os dados. Verifique o nome da cidade e tente novamente.");
        });
}
