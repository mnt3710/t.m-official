function showElementAnimation(){
    var element = document.getElementsByClassName('js-animation');
    if(!element) return;

    var showTiming = window.innerHeight > 1000 ? 200 : 40;
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for(var i=0;i<element.length;i++){
        var elemClienRect = element[i].getBoundingClientRect();
        var elemY=scrollY+elemClienRect.top;
        if(scrollY+windowH-showTiming>elemY){
        element[i].classList.add('is-show');
        }
        else if(scrolY+windowH<elemY){
            element[i].classList.remove('is-show');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll',showElementAnimation);