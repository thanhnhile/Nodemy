const color = document.querySelector('#color')
const erase = document.querySelector('#erase')
const minus = document.querySelector('#minus')
const fontSize = document.querySelector('.font')
const plus = document.querySelector('#plus')
const save = document.querySelector('#save')
const clear = document.querySelector('#clear')
const canvas = document.querySelector('canvas')

var ctx = canvas.getContext('2d')


function currentPosition (x,y){
    return {x,y}
}
var currentPos= new currentPosition(0,0)
var postAfter = currentPos
var isDrawing =false
var isErase = false
var colorPaint = color.value
var lineWidth = parseInt(fontSize.innerHTML)
canvas.addEventListener('mousedown',function(e){
    currentPos = new currentPosition(e.offsetX,e.offsetY)
    isDrawing = true
})
canvas.addEventListener('mousemove',function(e){
    if(isDrawing){
        postAfter = new currentPosition(e.offsetX,e.offsetY)
        ctx.beginPath()
        ctx.arc(currentPos.x,currentPos.y,lineWidth/2,0,2*Math.PI)
        ctx.fill()
        ctx.fillStyle= (isErase && '#fff') ||  colorPaint
        ctx.beginPath()
        ctx.moveTo(currentPos.x,currentPos.y)
        ctx.lineTo(postAfter.x,postAfter.y)
        ctx.strokeStyle = (isErase && '#fff') ||  colorPaint
        ctx.lineWidth = lineWidth
        ctx.stroke()
        currentPos = new currentPosition(postAfter.x,postAfter.y)
    }
})
canvas.addEventListener('mouseup',function(){
    isDrawing=false
})
color.addEventListener('change',function(e){
    colorPaint = e.target.value
})
erase.addEventListener('click',()=>{
    isErase = (!isErase)
    erase.classList.toggle('active')
})
minus.addEventListener('click',()=>{
    lineWidth = lineWidth >0 ? lineWidth - 2 : 0
    fontSize.innerHTML = lineWidth
})
plus.addEventListener('click',()=>{
    lineWidth = lineWidth < 30 ? lineWidth + 2 : 30
    fontSize.innerHTML = lineWidth
})
save.addEventListener('click',()=>{
    var output = canvas.toDataURL()
    save.setAttribute("download",new Date().getUTCMilliseconds().toString()+'.png')
    save.href = output
})
clear.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})