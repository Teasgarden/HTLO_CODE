function displaySongName(artist) {
    document.getElementById("albumList").innerHTML = "";
    let h3 = document.createElement("h3");
    h3.innerText = artist;
    document.getElementById("albumList").appendChild(h3)
}


//displayArtist("Glass Animals", "artistImg");
function displayArtist(artistName, artistImg) {
    document.getElementById("Artist").innerHTML = "";
    let img = document.createElement("artistImg");
    img.setAttribute("src", artistImg);

    let h3Text = document.createElement("h3");
    h3Text.innerText = artistName;
}

//displayTrackist("trackname" ,"trackImg");
function displayTrackist(trackname, trackImg) {
    document.getElementById("Tracklist").innerHTML = "";
    let img = document.createElement("trackImg");
    img.setAttribute("src", trackImg);

    let h3Text = document.createElement("h3");
    h3Text.innerText = trackname;
}

function displayPLaylist(PLname, PLimg) {
    document.getElementById("Playlist").innerHTML = "";
    let img = document.createElement("PLimg");
    img.setAttribute("src", PLimg);

    let h3Text = document.createElement("h3");
    h3Text.innerText = PLname;
}

//displayPostca("postName", "postImg");
function displayPostcast(postName, postImg) {
    document.getElementById("Postcard").innerHTML = "";
    let img = document.createElement("postImg");
    img.setAttribute("src", postImg);

    let h3Text = document.createElement("h3");
    h3Text.innerText = postName;
}

function search() {
    let searchInput = document.getElementById("searchInput").value;
    let Selection = document.getElementById("Selection").value;
    const url = `https://spotify23.p.rapidapi.com/search/?q=${searchInput}&type=${Selection}&offset=0&limit=5&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eef58cbe75mshac8d7357378fe4bp1b93a2jsn22e4b8482b2d',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    fetch(url, options).then((res) => {
        return res.json();
    }).then((data) => {
        if (Selection == "artists") {
            displayArtist(data);
        } else if(Selection == "tracks") {
            displayTrackist(data);
        } else if(Selection == "playlists") {
            displayPLaylist(data);
        } else if(Selection == "postcasts") {
            displayPostcast(data);
        }
    })
}