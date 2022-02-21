var telegram = document.getElementById("telegram");
var instagram = document.getElementById("instagram");

telegram.onclick = function() {
    navigator.clipboard.writeText("@Venskovich");
    telegram.innerHTML = "copied"
    setTimeout(function() {
        telegram.innerHTML = "@Venskovich"
    }, 1000)
}
instagram.onclick = function() {
    navigator.clipboard.writeText("@Venskovich.Tech");
    instagram.innerHTML = "copied";
    setTimeout(function() {
        instagram.innerHTML = "@Venskovich.Tech"
    }, 1000)
}