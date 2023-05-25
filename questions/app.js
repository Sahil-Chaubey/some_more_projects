//using selectors inside the element
// traversing the dom


// the following method is triversing the DOM method we use parentElement to solve the question 

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         let question = e.currentTarget.parentElement.parentElement

//         question.classList.toggle('show-text')
//     });
// });


// the follwing method we use selector inside the element 

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn')
    // console.log(btn);

    btn.addEventListener('click', function(e){
        questions.forEach(function(item){
            if (item !== question){
                item.classList.remove('show-text')
            }
        })

        question.classList.toggle('show-text')
    })
})


