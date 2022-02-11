var searchBtn = document.querySelector('.search-box__button')

searchBtn.onclick = function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
}