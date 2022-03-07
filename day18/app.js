const boxs = document.querySelectorAll('.box')
const targets = document.querySelectorAll('.target')
var currentTarget = null;


targets.forEach(target => {
    target.addEventListener('dragstart', function (e) {
        this.classList.add('out')
        currentTarget = this
    })
})
targets.forEach(target => {
    target.addEventListener('dragend', function () {
        this.classList.remove('out')
        currentTarget = this
    })
})
boxs.forEach(box => {
    box.addEventListener('dragover', function (e) {
        e.preventDefault()
        this.appendChild(currentTarget)
    });
    box.addEventListener('drop', function () {
        this.appendChild(currentTarget)
    })
})