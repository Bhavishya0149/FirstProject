// function pulldown(){
//     let navbar = document.getElementById("navbar");
//     if (navbar.style.top == "0px") {
//         navbar.style.top = "-100px";    
//     } else {
//         navbar.style.top = "0px"
//     }
// };

// function pulldown(){
//     // let navbar = document.getElementById("navbar");
//     let hamburger = document.getElementById("hamburger");
//     if (hamburger.style.top != "0px") {
//         hamburger.style.top = "0px";    
//     } else {
//         hamburger.style.top = "unset";
//     }
// };

function toggleNav(){
    let navbar = document.getElementById("navbar");
    if (navbar.style.display != "flex") {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
};
