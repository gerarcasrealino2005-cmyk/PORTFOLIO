function openProject(){
alert("Opening My Projects");
}

window.onload = function(){
const title = document.getElementById("title");

if(title){
title.style.transform = "scale(1.05)";
title.style.transition = "0.4s";
}
};
