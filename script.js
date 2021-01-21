let flag = true;
document.getElementById("showTrend").addEventListener("click", ()=>{
    if (flag){
        document.getElementById("trending").style.left = "0";
        document.getElementById("trending").style.width = "25%";
        document.getElementById("trending").style.paddingLeft = "1rem";
        document.getElementById("showTrend").style.left = "25%";
        document.getElementById("showTrend").style.transform = "rotate(180deg)";
        document.getElementById("playlistContainer").style.width = "75%";
        flag = false;

    }
    else {
        document.getElementById("trending").style.left = "-25%";
        document.getElementById("trending").style.width = "0";
        document.getElementById("trending").style.paddingLeft = "0";
        document.getElementById("showTrend").style.left = "0";
        document.getElementById("showTrend").style.transform = "rotate(0)";
        document.getElementById("playlistContainer").style.width = "100%";
        flag = true;
    }
});

let playlist = document.getElementsByClassName("playlist");
for (let i of playlist){
    i.addEventListener("click", ()=>{
        for (let y of playlist) y.style.height = "5rem"
        i.style.height = "auto";
    });
}

function createPlaylist(title, style) {
    let divGlobal = document.createElement("div");
    divGlobal.className = "playlist";
    document.getElementById("playlistContainer").append(divGlobal);

    let divTop = document.createElement("div");
    divTop.className = "top";
    divGlobal.append(divTop);

    let spanTitle = document.createElement("span");
    spanTitle.className = "playlistTitle";
    spanTitle.innerHTML = title;
    divTop.append(spanTitle);

    let spanStyle = document.createElement("span");
    spanStyle.className = "playlistStyle";
    spanStyle.innerHTML = style;
    divTop.append(spanStyle);

    divGlobal.addEventListener("click", ()=>{
        for (let y of playlist) y.style.height = "5rem"
        divGlobal.style.height = "auto";
    });

    let divMusic = document.createElement("div");
    divMusic.className = "music";
    divGlobal.append(divMusic);

    let inputTitle = document.createElement("input");
    inputTitle.placeholder = "Titre de la musique";
    inputTitle.className = "piti";
    divMusic.append(inputTitle);

    let inputAuthor = document.createElement("input");
    inputAuthor.placeholder = "Auteur de la musique";
    inputAuthor.className = "piti";
    divMusic.append(inputAuthor);

    let inputLink = document.createElement("input");
    inputLink.placeholder = "Lien de la musique";
    inputLink.className = "piti";
    divMusic.append(inputLink);

    let buttonAdd = document.createElement("button");
    buttonAdd.innerHTML = "Ajouter";
    divMusic.append(buttonAdd);

    buttonAdd.addEventListener("click", ()=>{
        let pTitle = document.createElement("p");
        pTitle.innerHTML = inputTitle.value
        pTitle.className = "listMusic"
        divMusic.prepend(pTitle);

        let spanAuthor = document.createElement("span");
        spanAuthor.innerHTML = inputAuthor.value;
        spanAuthor.className = "auteur";
        pTitle.append(spanAuthor);

        let linkMusic = document.createElement("a");
        linkMusic.innerHTML = "<i class=\"fas fa-play\"></i>";
        linkMusic.href = inputLink.value;
        pTitle.append(linkMusic);

        inputTitle.value = "";
        inputAuthor.value = "";
        inputLink.value = "";
    });
}

document.getElementById("create").addEventListener("click", ()=>{
    document.getElementById("value").style.display = "inline-block";
});

document.getElementById("valid").addEventListener("click", ()=>{
    let title = document.getElementById("title").value;
    let style = document.getElementById("style").value;
    createPlaylist(title, style);

    document.getElementById("value").style.display = "none";
    document.getElementById("title").value = "";
    document.getElementById("style").value = "";

});