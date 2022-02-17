const btnElements = document.querySelectorAll('.control button')
const toastWrapper = document.querySelector('#toast')
const toasts = {
	success: {
		icon: '<i class="fas fa-check-circle"></i>',
		msg: 'This is a success message !',
	},
	error: {
		icon: '<i class="fas fa-exclamation-triangle"></i>',
		msg: 'This is a error message !',
	},
	warning: {
		icon: '<i class="fas fa-exclamation-circle"></i>',
		msg: 'This is a warning message !',
	},
}

btnElements.forEach(btn => btn.addEventListener('click',function(e){
    createToast(e.target.getAttribute('class'))
}))
function createToast(type){
    // let toast = `<div class="toast ${type}">
    // <span class="icon">${toasts[type].icon}</span>
    // <span class="message">${toasts[type].msg}</span>
    // </div>`
    let toast = document.createElement('div')
    toast.innerHTML = `<span class="icon">${toasts[type].icon}</span>
    <span class="message">${toasts[type].msg}</span>`
    toast.setAttribute('class','toast '+type)
    toastWrapper.appendChild(toast)
    // let hideToast = new Promise(function(resolve,reject){
    //     setTimeout(()=>{
    //         toast.style.animation = 'toastHide 1s ease forwards'
    //         resolve(toast)
    //     },4000)
    // })
    // setTimeout(()=>{
    //     toast.style.animation = 'toastHide 1s ease forwards'
    //     resolve(toast)
    // },4000)
    // setTimeout(() => {
	// 	toast.remove()
	// }, 6000)
    //Bat dong bo
    let hideToast = new Promise(function(resolve,reject){
        setTimeout(()=>{
            toast.style.animation = 'toastHide 1s ease forwards'
            resolve()
        },4000)
    })
    hideToast.then(()=>{
        setTimeout(()=>{
            toast.remove()
        },1000)
    })
    
}
