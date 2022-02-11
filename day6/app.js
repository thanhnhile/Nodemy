const alert = document.querySelector('.alert')
const box = document.querySelector('.box')
const result = document.querySelector('.result')
const key = document.querySelector('.key p')
const code = document.querySelector('.code p')
const which = document.querySelector('.which p')



window.addEventListener('keydown', (e)=>{
    result.innerText =(e.timeStamp/1000).toFixed(1)
    which.innerText = e.which
    key.innerText = e.key.toUpperCase()
    code.innerText = e.code
    alert.classList.add('hide')
    box.classList.remove('hide')
})