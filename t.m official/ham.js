function ham_nav(){
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var black_bg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click',function(){
        body.classList.toggle('nav-open');
    });
    black_bg.addEventListener('click',function(){
        body.classList.remove('nav-open');
    });
}
ham_nav();