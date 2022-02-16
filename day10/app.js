const input = document.getElementById('input')
const form = document.querySelector('#form')
const list = document.querySelector('#to-do-list')
const KEY = 'Nodemy'
var todos=[]
function getData(){
    todos = JSON.parse(localStorage.getItem(KEY))
    if(!todos){
        todos=[]
    }
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let todoInput = input.value.trim()
    if(todoInput){
        let todo = {
            todo:todoInput,
            status:'yet'
        }
        saveToStorage(todo)
        addTodoElement(todo,todos.length-1)
        input.value=''
        input.focus()
    }else{
        alert('Please enter your todo..!')
    }
})
function saveToStorage(todo){
    if(todo){
        if(Array.isArray(todos)){
           todos.push(todo)
        }else{
            todos[0]=todo
        }
    }
    localStorage.setItem(KEY,JSON.stringify(todos))
}
function addTodoElement(todo,index){
    // <li class="complete">
    //             <span>Di choi</span>
    //             <i class="fas fa-trash"></i>
    //         </li>
    var li = document.createElement('li')
    li.setAttribute('data-index',index)
    li.innerHTML = `<span>${todo.todo}</span>
    <i class="fas fa-trash"></i>`
    if(todo.status==='complete'){
        li.setAttribute('class','complete')
    }
    li.addEventListener('click',function(){
        this.classList.toggle('complete')
        let todo = todos[this.dataset.index]
        todo.status = this.className || 'yet'
        localStorage.setItem(KEY,JSON.stringify(todos))

    })
    li.querySelector('i').addEventListener('click',function(){
       this.parentElement.remove()
       todos.splice(this.dataset.index,1)
       localStorage.setItem(KEY,JSON.stringify(todos))
    })
    list.appendChild(li)
}
function render(){
    getData()
    list.querySelectorAll('li').forEach(li => li.remove())
    if(todos){
        todos.forEach((todo,index) => addTodoElement(todo,index))  
    }
}
render()