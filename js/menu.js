const openMenu = document.getElementById("menu");
const btn= document.getElementById("parametre");
const over = document.getElementById("overlay");


over.addEventListener('click', () =>{
    const mnu=document.getElementById('pmtr');
    closemnu(mnu);
})

openMenu.addEventListener('click', () =>{
    const mnu=document.getElementById('pmtr');
    openmnu(mnu);
})

function openmnu(mnu) {
    if (mnu == null) return; 
    mnu.classList.add('active');
    over.classList.add('active-menu');
    btn.classList.add('active');
}

function closemnu(mnu) {
    if (mnu == null) return; 
    mnu.classList.remove('active');
    over.classList.remove('active-menu');
    btn.classList.remove('active')
}
