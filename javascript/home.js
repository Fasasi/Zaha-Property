const handBB =document.querySelector('.fa-bars');
const handBM =document.querySelector('.handburger-menu');
const cancelB =document.querySelector('.cancel');
const subMDown =document.querySelector('.fa-caret-down');
const subMC =document.querySelector('.sub-menu');

handBB.addEventListener('click', ()=>{
    handBM.style.display = 'flex';
});

cancelB.addEventListener('click', ()=>{
    handBM.style.display = 'none';
});

subMDown.addEventListener('click', ()=>{
    subMC.classList.toggle('test');

});

const header =document.querySelector('.h-content');

window.addEventListener('scroll', ()=>{
    header.style.backgroundColor = 'rgba(18, 35, 46, 1)'; 
});

const box1=document.querySelector('.real-estate');
const box2=document.querySelector('.business');
const box3=document.querySelector('.probate');

box1.addEventListener('click', ()=>{
    box1.classList.add('boxstyle');
    box2.classList.remove('boxstyle');
    box3.classList.remove('boxstyle');
    
});

box2.addEventListener('click', ()=>{
    box2.classList.add('boxstyle');
    box1.classList.remove('boxstyle');
    box3.classList.remove('boxstyle');   

});
box3.addEventListener('click', ()=>{
    box3.classList.add('boxstyle'); 
    box2.classList.remove('boxstyle');
    box1.classList.remove('boxstyle');
      

});


// const allDiv =document.querySelector('.wwdcontent');
// const divvv =allDiv.querySelectorAll('div');

// console.log(divvv);

// divvv.forEach((dovv)=>{
//     dovv.addEventListener('click', ()=>{
//         dovv.style.borderLeft ='5px solid rgb(244,191,12)';
//         }
// });

