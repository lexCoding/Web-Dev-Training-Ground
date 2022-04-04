'use-strict';

const dropdown = document.querySelector('.role')
const dropdownFeature = document.querySelector('.feature')
const dropdownFeature2 = document.querySelector('.feature-2')
const dropdownFeature3 = document.querySelector('.feature-3')
const dropdownList = document.querySelector('.dropdown-list')
const select = document.querySelector('.select')


dropdown.addEventListener('click', function(e){
    dropdownList.classList.toggle('show')
    const data = e.target.closest('li')
    
    if(!data) return;
    select.textContent = data.dataset.choice;
})

dropdownFeature.addEventListener('click', function(e){
    
    dropdownFeature3.classList.toggle('show')
    const data = e.target.closest('li')
    console.log(data)
    if(!data) return;
    dropdownFeature2.textContent = data.dataset.choice;
})
