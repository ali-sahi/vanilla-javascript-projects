// const btns = document.querySelectorAll('.question-btn')
// const plus_btn = document.querySelector('.plus-icon');
// const minus_btn = document.querySelector('.minus-icon');
// const text = document.querySelector('.question-title');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const article = e.currentTarget.parentElement.parentElement;
//         article.classList.toggle('show-text')


//     })
// })


const questions = document.querySelectorAll('.question');

questions.forEach(function(question){

    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click',function(){
        questions.forEach(function(item){
            if(item!==question){
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text');
     
        })
    
})


