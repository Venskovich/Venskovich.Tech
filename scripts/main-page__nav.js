var navCollection = document.getElementsByTagName("nav");
var nav = navCollection[0]; // getElementsByTagName creates a collection of one element, so I eject it to work with element, not collection
var flag = true;

window.onscroll = function() {
    if (flag == true && window.scrollY >= 50) {
        flag = false;        
        nav.classList.add("nav-enabled");
    } else if (window.scrollY < 50 && flag == false) {
        flag = true;
        nav.classList.remove("nav-enabled");
    }
}

// THE CODE IF YOU WANT TO CHANGE STYLES VIA JAVASCRIPT ONLY
//
// window.onscroll = function() {
//     if (flag == true && window.scrollY >= 50) {
//         flag = false;
//         console.log("menu enabled");
//         nav.style.backgroundColor = "rgb(255, 255, 255, 0.6)";
//     } else if (window.scrollY < 50 && flag == false) {
//         flag = true;
//         console.log("menu disabled");
//         nav.style.background = "none";
//     }
// }

