function displaySongName(artist) {
    document.getElementById("albumList").innerHTML = "";
    let h3 = document.createElement("h3");
    h3.innerText = artist;
    document.getElementById("albumList").appendChild(h3)
}

//displaySongName("How to be a human being", "albumImg", "Glass Animals");
function displaySongName(albumName, albumImg, artist) {
    document.getElementById("albumList").innerHTML = "";
    let img = document.createElement("img");
    img.setAttribute("src", albumImg);

    let h3Text = document.createElement("h3");
    h3Text.innerText = albumName;
    
    let H3text = document.createElememt("h3");
    H3text.innerText = artist;

    document.getElementById("albumList").appendChild(img);
    document.getElementById("albumList").appendChild(div);
}

//displayArtist("Glass Animals", "artistImg");
function displayArtist(artistName, artistImg) {
    document.getElementById("Artist").innerHTML = "";
    let img = document.createElement("artistImg")
}