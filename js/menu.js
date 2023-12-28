const btn= document.getElementById("parametre");
const mnu=document.getElementById('pmtr');
const pp=document.getElementsByClassName('proposition');
const lnk=document.querySelectorAll("#navig a");
let input = document.getElementById("sitesearch");
let mn=0;
let dico = {};

for(let i=0;i<pp.length;i++){
    let pps1 ="";
    for(let ch of pp[i].innerHTML){if(ch=="<"){break;};pps1+=ch};
    dico[pps1]=lnk[i].getAttribute('href');
}


btn.addEventListener('click', () =>{
    openmnu(mnu);
})
//when the users clicks outside of the little navsearch block it closes
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
    for(pps of pp){
        pps.style.display="none";
    };
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

/*submit*/


document.querySelector('form').addEventListener("submit",function(e){
    e.preventDefault();
    let rch = input.value.toUpperCase()
    if( rch in dico){
        window.open(dico[rch], "_self");
    }
    else{window.location.href='/page-erreur-404.html'};
    
    
})
