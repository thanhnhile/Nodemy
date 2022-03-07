const btns = document.querySelectorAll('.filter-btn')
const filter = document.querySelector('.filter')
const foodList = document.querySelector('.food-list')
const App = {
    //Data
    foods : [
        {
            type:"meat",
            img:'https://rd4q8.csb.app/meat1.jpg'
        },
        {
            type:"meat",
            img:'https://rd4q8.csb.app/meat2.jpg'
        },
        {
            type:"drink",
            img:'https://rd4q8.csb.app/drinks1.jpg'
        },
        {
            type:"drink",
            img:'https://rd4q8.csb.app/drinks2.jpg'
        },
        {
            type:"drink",
            img:'https://rd4q8.csb.app/drinks3.jpg'
        },
        {
            type:"salad",
            img:'https://rd4q8.csb.app/salad1.jpg'
        },
        {
            type:"salad",
            img:'https://rd4q8.csb.app/salad2.jpg'
        },
        {
            type:"dessert",
            img:'https://rd4q8.csb.app/dessert1.jpg'
        },
    ],
    render:function(arr){
        const htmls = arr.map(food=>{
            return `<div class="food-item">
            <img src=${food.img} alt="">
        </div>`
        })
        foodList.innerHTML = htmls.join('')
    },
    eventListener:function(){
        const _this = this
        btns.forEach(btn => {
            btn.addEventListener('click',function(){
                let datas
                if(this.getAttribute('type') == 'all'){
                    datas = _this.foods
                }else{
                    datas = _this.foods.filter(food => {
                        return food.type === this.getAttribute('type')
                    }) 
                }
                _this.render(datas)
                document.querySelector('.filter-btn.active').classList.remove('active')
                this.classList.add('active')
            })
        })
    },
    //method
    start:function(){
        this.eventListener()
        this.render(this.foods)
    }
}
App.start()

