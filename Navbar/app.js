// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    
    //following is the long method to do this toggel function 
    // and after this we will see the one liner toggle method for this 

    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }
    // else {
    //     links.classList.add('show-links')
    // }


    // toggle method 

    // for toggel we have to set the height of the links class to auto so that we can give them the height that we want in and toggel and after that in big screen also this will not give us any problem to show the links on the full screen 

    links.classList.toggle('show-links');

})





