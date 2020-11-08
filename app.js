import get from './utils/getElement.js';
import getUser from './utils/getUser.js';

const img = get('.u-img');
const title = get('.card-title');
const value = get('.card-text');
const btn = get('.random');
const btns = [...document.querySelectorAll('.icon')];

const showUser = async() => {
    const person = await getUser();
    displayUser(person);
};

function displayUser(person){
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My Name is`;
    btns.forEach((btn)=> btn.classList.remove('active'));
    btns[0].classList.add('active');

    btns.forEach((element)=>{
        const label = element.dataset.label;
        element.addEventListener('click',()=>{
            title.textContent = `My ${label} is`;
            value.textContent = person[label];
            btns.forEach((btn)=> btn.classList.remove('active'));
            element.classList.add('active');
        });
    });
};
window.addEventListener('DOMContentLoaded',showUser);
btn.addEventListener('click',showUser);