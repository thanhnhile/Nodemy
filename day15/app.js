const api = 'https://fakestoreapi.com/products'
const listProduct = document.querySelector('.list-product')
const input = document.querySelector('#filter-input')
let datas=[]

// function getData(){
//     fetch(api)
//         .then((resp)=>{
//             return resp.json()
//             .then((data)=>{
//                render(data)
//             })
//         })
// }
// function render(data){
//     let htmls = data.map((product)=>{
//         return `<li>
//         <a href="#" class="product-item" data-id=${product.id}>
//             <div class="product-img">
//                 <img src="${product.image}" alt="pn1">
//             </div>
//             <div class="product-info">
//                 <h4>${product.title}</h4>
//                 <p>${product.price}</p>
//             </div>
//         </a>
//         </li>`
//     })
//     listProduct.innerHTML=htmls.join('')
// }
// getData()

async function renderData() {
    const data = await fetch(api)
        .then((resp) => resp.json())
        .catch(() => {console.log('No data')})
        .then((products) => {
            datas = products
            let htmls = products.map((product) => {
                return `<li>
                        <a href="#" class="product-item" data-id=${product.id}>
                            <div class="product-img">
                                <img src="${product.image}" alt="pn1">
                            </div>
                            <div class="product-info">
                                <h4>${product.title}</h4>
                                <p>${product.price}</p>
                            </div>
                        </a>
                        </li>`
            })
            listProduct.innerHTML = htmls.join('')
        })

}

function filterData(searchText){
    console.log(searchText)
    const result = datas.filter((product)=>{
       return product.title.toLowerCase().includes(searchText.toLowerCase())
    })
    let htmls = result.map((product) => {
        return `<li>
                <a href="#" class="product-item" data-id=${product.id}>
                    <div class="product-img">
                        <img src="${product.image}" alt="pn1">
                    </div>
                    <div class="product-info">
                        <h4>${product.title}</h4>
                        <p>${product.price}</p>
                    </div>
                </a>
                </li>`
    })
    listProduct.innerHTML = htmls.join('')

}
//Lang nghe su kien
input.addEventListener('input',function(e){
    filterData(e.target.value)
})

renderData()
