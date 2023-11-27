const items=document.getElementsByClassName('imge');
const descrpt=document.getElementById("imginfos");
items[0].classList.add('active');
const nbSlide=items.length;
const suivant = document.getElementById('fleche-d');
const precedent = document.getElementById('fleche-g');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if (count < nbSlide -1){
        count ++
    }
    else{
        count=0

    }

    items[count].classList.add('active');
}

suivant.addEventListener('click',slideSuivante)

function slidePrecedent(){
    items[count].classList.remove('active')

    if (count > 0){
        count --;

    }else {
        count = nbSlide -1;
    }

    items[count].classList.add('active');
}

precedent.addEventListener('click',slidePrecedent);

/*
for(element of items){
    console.log(element.id);
    element.addEventListener("mouseenter",() =>{
        console.log(element.id);
        if (element==items[0]){descrpt.innerHTML="ME"};
        if (element==items[1]){descrpt.innerHTML="My SKILLS"};
        if (element==items[2]){descrpt.innerHTML="My projects"};
        descrpt.style.display="block";


    })
    element.addEventListener("mouseleave",() =>{
        descrpt.style.display="none";
        descrpt.innerHTML="";
    })
}; 

*/