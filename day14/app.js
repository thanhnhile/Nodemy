const imgFeature = document.querySelector('.img-feater img')
const btnPrev = document.querySelector('.control.prev')
const btnNext = document.querySelector('.control.next')
const listImg = document.querySelectorAll('li img')

function setShowImg(){
    var showImage = listImg[currentIndex]
    imgFeature.src = showImage.src
    document.querySelector('li.active').classList.remove('active')
    showImage.parentElement.classList.add('active')
}
//event listener
listImg.forEach((img,index)=>{
    img.addEventListener('click',function(){
        currentIndex = index
        imgFeature.style.animation=''
        setTimeout(()=>{
            setShowImg()
            imgFeature.style.animation='slideRight 1s ease-in-out forwards'
        },1000)
    
    })
})
btnPrev.addEventListener('click',()=>{
    currentIndex = currentIndex === 0 ? listImg.length-1 : currentIndex-1
    imgFeature.style.animation=''
    setTimeout(()=>{
        setShowImg()
        imgFeature.style.animation='slideRight 1s ease-in-out forwards'
    },1000)
})
btnNext.addEventListener('click',()=>{
    currentIndex = currentIndex === listImg.length-1 ? 0 : currentIndex+1
    imgFeature.style.animation=''
    setTimeout(()=>{
        setShowImg()
        imgFeature.style.animation='slideLeft 1s ease-in-out forwards'
    },1000)
})
function autoSlideShow(){
    setInterval(()=>{
        currentIndex+=1
        if(currentIndex===listImg.length){
            currentIndex=0
        }
        imgFeature.style.animation=''
        setTimeout(()=>{
            setShowImg()
            imgFeature.style.animation='slideRight 1s ease-in-out forwards'
        },2000)

    },3000)
}
var currentIndex = 0
setShowImg()
autoSlideShow()