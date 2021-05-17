const ratings = document.querySelectorAll('.rating');
const ratingText = document.querySelectorAll('.rating small');
// ratingText.forEach(rating=>{
//     console.log(rating)
// })
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
const ratingContainer = document.querySelector('.rating-container');

let selectedRating = 'Satisfied';


ratingContainer.addEventListener('click', (e)=>{
    // console.log(e.target)
    if(e.target.parentNode.classList.contains('rating') || e.target.parentNode.classList.contains('rating ratingText') ){
        removeActive();
        e.target.parentNode.classList.add('active');

        selectedRating = e.target.nextElementSibling.innerHTML;
        console.log(selectedRating)
    }
});


sendBtn.addEventListener('click',(e)=>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
});


function removeActive(){
    for(let i=0;i<ratings.length;i++){
        ratings[i].classList.remove('active')
    }
}