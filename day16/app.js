const showOnScroll = document.querySelectorAll('.show-on-scroll')


function handleAnimationTongleElementInWindow(element){
    var rectE = element.getClientRects()[0]
    var heightWindows = window.innerHeight || document.documentElement.clientHeight
    if(!( rectE.bottom<0 || rectE.top > heightWindows)){
        element.classList.add('start')
    }
    else{
        element.classList.remove('start')
    }
}
function isElementOnWindow(){
    showOnScroll.forEach((e)=>handleAnimationTongleElementInWindow(e))
}

window.onscroll= isElementOnWindow
