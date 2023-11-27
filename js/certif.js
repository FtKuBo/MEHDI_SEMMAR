const pgs = document.getElementsByClassName("uplink");
const html = document.getElementsByClassName("page");
const nav = document.getElementsByClassName("navig");
for(let elt of pgs){
    if(elt.value=="CERTIFICATIONS"){
        elt.style.borderBottom="#A8A8A8 solid 2px";
        elt.style.opacity="1";
    }
}

onscroll= () => {
    console.log("hyy");
}