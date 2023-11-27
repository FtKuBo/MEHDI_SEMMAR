const btn= document.getElementById("parametre");
const mnu=document.getElementById('pmtr');
const pp=document.getElementsByClassName('proposition');
let input = document.getElementById("sitesearch")
let mn=0;

btn.addEventListener('click', () =>{
    openmnu(mnu);
})

window.addEventListener("click", (event) => {
    if (!event.target.classList.contains('active') && !event.target.classList.contains('proposition')){
        if(event.target.classList.contains('active1')){
            if (mn==0){
                mn=1;
            }
            else{
                mn=0;
                closemnu(mnu);
            }
        }
        else{
            mn=0
            closemnu(mnu);
        }
        
        
    }
})

function openmnu(mnu) {
    if (mnu == null) return; 
    mnu.classList.add('active');
    btn.classList.add('active1');
}

function closemnu(mnu) {
    if (mnu == null) return; 
    mnu.classList.remove('active');
    btn.classList.remove('active1');
    input.value="";
    /* régler le probléme de la barre de recherhce */
}


/* Barre de recherche dynamique */
function search_opt(){
    for(let pps of pp){
        pps.addEventListener("click",()=>{
            input.value="";
            for(let ch of pps.innerHTML){
                if (ch=="<"){break;}
                input.value+=ch;
            }
            
            
        })
        if(pps.innerHTML.slice(0,input.value.length) == input.value.toUpperCase() && pps.innerHTML != ""){
            pps.style.display="block";
            }
        else{
            pps.style.display="none";
        }
    }
}
