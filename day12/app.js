const range = document.querySelector('.range')
const progress = document.querySelector('.progress')
const text = progress.querySelector('p')

range.addEventListener('mousemove',function(e){
    let progressWidth = e.pageX - this.offsetLeft
    let percentage = Math.round(progressWidth/this.offsetWidth*100)
    updateProgress(percentage)
})
function updateProgress(percentage){
    progress.style.width=`${percentage}%`
    text.textContent=`${percentage}%`
    document.querySelector('body').style.backgroundColor=`rgba(0,0,0,${percentage/100})`
}

updateProgress(10)