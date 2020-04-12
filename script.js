let img = document.querySelector('#avatar')
var icons = document.querySelectorAll('.logo')

img.addEventListener('click', function(){
    for(let i in icons){
        if(!icons[i].classList.contains('show')){
            icons[i].classList.add('show')
            icons[i].classList.remove('hide')
        }else{
            icons[i].classList.add('hide')
            icons[i].classList.remove('show')
        }
    }
})

$('.logo').click(function(){
    console.log($(this).prop('id'))
})