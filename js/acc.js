const items=document.getElementsByClassName('imge');
const descrpt=document.getElementById("imginfos");
items[0].classList.add('active');
const nbSlide=items.length;
const suivant = document.getElementById('fleche-d');
const precedent = document.getElementById('fleche-g');
const txt = document.getElementsByClassName('txt');
const barrNav = document.getElementById('navig')
const txtNav = document.getElementsByClassName('uplink');
let count = 0;
// Function to make the element visible after a delay
function makeVisible() {
  for(let tt of txt){tt.style.visibility = "visible";}
}

// Delay the action by 2 seconds (2000 milliseconds)
window.onload = function() {
  setTimeout(makeVisible, 2000);  //assuring a better user experience
    for(let tt of txt){tt.style.opacity="0";}
    if (window.innerWidth<=1024){txt[0].style.opacity="1";console.log(txt[0].style)}
}


// 

// when scrolling the image is getting stuck to tha footer
window.addEventListener('scroll', function() {

    var headerHeight = barrNav.offsetHeight+90;
    var sliderImages = document.querySelectorAll('.slider img');
    var fd = document.getElementById('fleche-d');
    var fg = document.getElementById('fleche-g');

    for(let image of items){
        var scrollTop = document.documentElement.scrollTop;
        if(window.innerWidth >= 1200 && window.innerHeight>860){
            if (scrollTop >= headerHeight) { // making sure that the arrows are getting separated to not be covered by the image
            image.style.top = headerHeight + 'px';//as it sticks to the footer

            if(window.innerWidth > 650){for (let tt of txt){tt.style.transform = "translateY(-350%)";}}

            barrNav.style.borderBottom = "hidden";

            for(let txt of txtNav){txt.style.color = "#5F0A0A";}

            fd.style.transform = "translateX(800%)";

            fg.style.transform = "translateX(-800%)";

            fd.onmouseover= () =>{fd.style.scale="1";}
            
            fg.onmouseover= () =>{fg.style.scale="1";}
            

        } else {
            image.style.top = 0;

            for (let tt of txt){tt.style.transform = "translateY(-450%)";}

            fd.style.transform = "translateX(0%)";

            fg.style.transform = "translateX(0%)";

            barrNav.style.borderBottom = "#A8A8A8 solid 1px";

            for(let txt of txtNav){txt.style.color = "#A8A8A8";}

            fd.onmouseover= () =>{fd.style.scale="1.2";}

            fg.onmouseover= () =>{fg.style.scale="1.2";}

            fd.onmouseleave= () =>{fd.style.scale="1";}

            fg.onmouseleave= () =>{fg.style.scale="1"}
        }
    };
    }
});// it makes a little description showing up when an image is hovered

if(window.innerWidth > 1024){ //just for the first slide
    items[count].onmouseover = function(){txt[count].style.opacity="1";}
    items[count].onmouseleave = function(){txt[count].style.opacity="0";}
}


function slideSuivante(){   //slider code using a simple counting system
    items[count].classList.remove('active');
    txt[count].style.opacity="0";

    if (count < nbSlide -1){
        count ++
    }
    else{
        count=0

    }
    
    items[count].classList.add('active');

    if(window.innerWidth > 1024){//if it is not on a big device so certainy touch-sentsitive device no need of mousedetector
        items[count].onmouseover = function(){txt[count].style.opacity="1";}
        items[count].onmouseleave = function(){txt[count].style.opacity="0";
        console.log("mechant mechant");    
    }
        
    }
    else{txt[count].style.opacity="1";
        console.log("normalement ça marche")}

}

suivant.addEventListener('click',slideSuivante)

function slidePrecedent(){
    items[count].classList.remove('active');
    txt[count].style.opacity="0";

    if (count > 0){
        count --;

    }else {
        count = nbSlide -1;
    }

    items[count].classList.add('active');
    if(window.innerWidth > 1024){//if it is not on a big device so certainy touch-sentsitive device no need of mousedetector
        items[count].onmouseover = function(){txt[count].style.opacity="1";}
        items[count].onmouseleave = function(){txt[count].style.opacity="0";
        console.log("mechant mechant");    
    }
        
    }
    else{txt[count].style.opacity="1";
        console.log("normalement ça marche")}
}

precedent.addEventListener('click',slidePrecedent);

