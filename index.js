document.addEventListener('DOMContentLoaded', function(){
    const button = document.querySelector('button');
    const body= document.querySelector('body');

    button.addEventListener('click', function(){
        alert('esto es un componente')

        if(body.style.backgroundColor === 'blue'){
            body.style.backgroundColor ='red'
        }else{
            body.style.backgroundColor = 'blue'
        }
    })


})