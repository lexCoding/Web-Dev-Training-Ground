'use-strict';

const dropdown = document.querySelector('.dropdown')
const dropdownList = document.querySelector('.dropdown-list')
const select = document.querySelector('.select')

dropdown.addEventListener('click', function(e){
    dropdownList.classList.toggle('show')
    const data = e.target.closest('li')
    
    if(!data) return;
    select.textContent = data.dataset.choice
    
})