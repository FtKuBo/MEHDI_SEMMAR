const pgs = document.getElementsByClassName("uplink");
const html = document.getElementsByClassName("page");
const nav = document.getElementsByClassName("navig");
for(let elt of pgs){
    if(elt.value=="CERTIFICATIONS"){//upgrading the user's experience : 
        elt.style.borderBottom="#A8A8A8 solid 2px";//the name of the page visitied is staying outlined
        elt.style.opacity="1";
    }
}
//better the user's experience blocks the animation from covering the navbar when scrolling during the firt second
const body = document.querySelector("body");
body.style.overflow = "hidden";
window.onload = function() {
    setTimeout(function(){body.style.overflow="auto"}, 1000);
  };