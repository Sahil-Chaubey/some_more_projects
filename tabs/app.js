const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;

    if(id){
        // remove active class from buttons
        // and adding to the selected button
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add('active')
        });

        // hide all the articel and display the selected one
        articles.forEach(function(article){
            article.classList.remove('active')
            
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
});