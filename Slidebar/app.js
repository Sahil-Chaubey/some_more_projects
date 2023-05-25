const togglebtn = document.querySelector('.sidebar-toggle');
const closebtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

togglebtn.addEventListener('click', function(){
    // in this we are going the long way to toggle
    if (sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }
    else {
        sidebar.classList.add('show-sidebar')
    }
})

closebtn.addEventListener('click' , function(){

    // this is the short way to toggle
    sidebar.classList.toggle('show-sidebar')
})