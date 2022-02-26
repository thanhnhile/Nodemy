const MIN_STEP = 10
const fbCounter = document.querySelector('#facebook')
const ytCounter = document.querySelector('#youtube')
const ttCounter = document.querySelector('#tiktok')

window.onload = function(e){
    counter(fbCounter,3500,4200)
    counter(ytCounter,0,1305)
    counter(ttCounter,9900,0)

}

function counter(element,from,to){
    let id = setInterval(()=>{
        let speed = Math.abs(to-from)*MIN_STEP/1000
        if(from<to){
            from+=Math.ceil(speed)  
            from > to && clearInterval(id);element.querySelector('.counter').textContent=to
        }
        else{
            from-=Math.ceil(speed ) 
            from<to && clearInterval(id);element.querySelector('.counter').textContent=to
        }
        if(from === to){
            clearInterval(id)
        }
        element.querySelector('.counter').textContent=from
    },1)
}
// function counterUp(el, to) {
// 	let speed = 200
// 	let from = 0
// 	let step = to / speed
// 	const counter = setInterval(function () {
// 		from += step
// 		if (from > to) {
// 			clearInterval(counter)
// 			el.innerText = to
// 		} else {

// 			el.innerText = Math.ceil(from)
// 		}
// 	}, 1)
// }
