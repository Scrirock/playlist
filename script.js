let flag = true;
document.getElementById("showTrend").addEventListener("click", ()=>{
    if (flag){
        document.getElementById("trending").style.left = "0";
        document.getElementById("trending").style.width = "25%";
        document.getElementById("trending").style.paddingLeft = "5rem";
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