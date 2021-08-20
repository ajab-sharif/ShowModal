'use strict';
// Selection /////////////////////////////////////////////////////////////////
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overly = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
// Function //////////////////////////////////////////////////////////
// Show Modal ;
const funcOpen = function () {
    modal.classList.remove('hidden');
    overly.classList.remove('hidden');
}

// Close Modal ;
const funcClose = function () {
    modal.classList.add('hidden');
    overly.classList.add('hidden');

}
// <<< Esc >>> click to close Modal /////////////////////////////////////////////////
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        funcClose();
    }

})


// functionality for open and close/////////////////////////////////////////////
for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', funcOpen);

}
closeModal.addEventListener('click', funcClose);
overly.addEventListener('click', funcClose);
