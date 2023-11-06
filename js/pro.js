const pgs = document.getElementsByClassName("uplink");
const html = document.getElementsByClassName("page");
const nav = document.getElementsByClassName("navig");
for(let elt of pgs){
    if(elt.value=="PROFESSIONAL EXPERIENCE"){
        elt.style.borderBottom="#A8A8A8 solid 0.5px";
        elt.style.fontWeight="Bold";
    }
}

onscroll= () => {
    console.log("hyy");
}