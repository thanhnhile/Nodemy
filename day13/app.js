const input = document.querySelector('#image')
const preview = document.querySelector('.preview')
const img = document.querySelector('img')

input.addEventListener('change',function(e){
    var image = this.files[0]
    console.log(image)
    if(!image){
        return
    }
    if(image.name.includes('.jpg')){

        var url = URL.createObjectURL(this.files[0])
        img.src=url;
        img.style.display='block'
    }
    // preview.style.backgroundImage=`url('${url}')`
})