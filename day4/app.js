const images = document.querySelectorAll('.image img')
const gallery = document.querySelector('.gallery')
const closeBtn = document.querySelector('.gallery .close')
const galleryInner = document.querySelector('.gallery-inner img')
const prevBtn = document.querySelector('.control.prev')
const nextBtn = document.querySelector('.control.next')

//function
let currentIndex
function showGallery(){
    gallery.classList.add('show')
}
function closeGallery(){
    gallery.classList.remove('show')
}
function showImage(){
    galleryInner.src=images[currentIndex].src
}
images.forEach((image,index)=>{
    image.addEventListener('click',(e)=>{
        showGallery()
        galleryInner.src = e.target.src
        currentIndex=index
    })
})
closeBtn.addEventListener('click',()=>
    closeGallery()
)
prevBtn.addEventListener('click',()=>{
    currentIndex==0 ? currentIndex=images.length-1 : currentIndex-=1
    showImage()
})
nextBtn.addEventListener('click',()=>{
    currentIndex==images.length-1 ? currentIndex=0 : currentIndex+=1
    showImage()
})
