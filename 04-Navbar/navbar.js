const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    // const checkClass = links.classList.contains('show-links');
    // if(checkClass){
    //     links.classList.remove('show-links')
    // }else{
    //     links.classList.add('show-links')
    // }

    // We can also use toggle //

    links.classList.toggle('show-links')
})