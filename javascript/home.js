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

const allDiv =document.querySelector('.wwdcontent');
const divvv =allDiv.querySelectorAll('div');

console.log(divvv);

divvv.forEach((dovv)=>{
    dovv.addEventListener('click', ()=>{
        dovv.style.borderLeft ='5px solid rgb(244,191,12)';
        // dovv.classList.toggle('boxstyle');
    });
});


// const box1=document.querySelector('.real-estate');
// const box2=document.querySelector('.probate');
// const box3=document.querySelector('.business');

// box1.addEventListener('click', ()=>{
// //    box1.classList.toggle('boxstyle');
//    box1.style.borderLeft ='5px solid rgb(244,191,12)';

// });

// box3.addEventListener('click', ()=>{
    

// });