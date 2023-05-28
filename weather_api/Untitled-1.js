function displayCountryName(country, name) {
    document.getElementById("name_country").innerHTML = "";
    let h3 = document.createElement("h3");
    h3.innerText = country + " - " + name;
    document.getElementById("name_country").appendChild(h3);
}

// displayCountryName("Viet Nam", "Ho Chi Minh City");

function displayCondition(temp_c, status, icon) {
    document.getElementById("condition").innerHTML = "";
    let img = document.createElement("img");
    img.setAttribute("src", icon);

    let h3Temp = document.createElement("h3");
    h3Temp.innerText = temp_c + " độ C";

    let h3Status = document.createElement("h3");
    h3Status.innerText = "Trạng thái: " + status;

    let div = document.createElement("div");
    div.appendChild(h3Temp);
    div.appendChild(h3Status);

    document.getElementById("condition").appendChild(img);
    document.getElementById("condition").appendChild(div);
}

// displayCondition(32, "Nóng qtqd", "https://cdn.weatherapi.com/weather/64x64/day/116.png")

function search() {
    let searchInput = document.getElementById("searchInput").value;
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${searchInput}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eef58cbe75mshac8d7357378fe4bp1b93a2jsn22e4b8482b2d',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    fetch(url, options).then((res) => {
        return res.json();
    }).then((data) => {
        displayCountryName(data.location.country, data.location.name);
        displayCondition(data.current.temp_c, data.current.condition.text, data.current.condition.icon);
    });
}