const container = document.querySelector('.container');
const card = document.querySelector('.card');
const show = document.querySelector('.show');
const close = document.querySelector('.close');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

container.addEventListener('click', function(e){
    if(e.target.className == 'show'){
        card.style.display = 'flex';
        card.classList.add('fade');
    }else if(e.target.className == 'close'){
        card.style.display = 'none';
        contact.style.display = 'none';
    }else if(e.target.className == 'about'){
        contact.style.display = 'flex';
        contact.classList.add('fade');
        card.style.display = 'none';
        
    }
})