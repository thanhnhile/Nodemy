const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const searchBox = $('.search-box ul')
const input = $('.search-text')
const removeAll = $('.btn')

const app = {
    tags: ['javascript','c++','css','html','react js'],
    render() {
        searchBox.querySelectorAll('li').forEach(li => li.remove())
        const html = this.tags.map((tag,index) => 
        `<li data-index=${index}>${tag}
        <i class="uit uit-multiply"></i> 
        </li>`)
        searchBox.insertAdjacentHTML('afterbegin', html.join(''))
        input.focus()
    },
    createTag(content){
        if(content.trim() && this.tags.includes(content)==false){
            this.tags.push(content)
            this.render()
        }
       
    },
    removeTag(index){
        this.tags.splice(index,1)
        this.render()
    },
    handleEvent(){
        input.addEventListener('keyup',(e)=>{
            if(e.keyCode==13){
                e.preventDefault()
                this.createTag(input.value)
                input.value=''
            }
        }),
        searchBox.addEventListener('click',(e)=>{
            let index = parseInt(e.target.parentElement.dataset.index)
            if(Number.isInteger(index)){
                this.removeTag(index)
            }
        }),
        removeAll.addEventListener('click',()=>{
            this.tags=[]
            this.render()
        })
    },
    start() {
        this.handleEvent()
        this.render()
    }
}
app.start()