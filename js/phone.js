const openPppup = document.querySelectorAll('[popup-open]');
const closePppup = document.querySelectorAll('[data-dismiss-popup]');
const overlay = document.getElementById('overlay');


overlay.addEventListener('click', () =>{
    const popup=document.getElementById('ppup');
    closePopup(popup);
})

openPppup.forEach(button => {
    button.addEventListener('click', () => {
        const popup=document.getElementById('ppup');
        openPopup(popup);
    })
})

closePppup.forEach(button => {
    button.addEventListener('click', () => {
        const popup=button.closest('.popup');
        closePopup(popup);
    })
})

function openPopup(popup) {
    if (popup == null) return; 
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup(popup) {
    if (popup == null) return; 
    popup.classList.remove('active');
    overlay.classList.remove('active');
}