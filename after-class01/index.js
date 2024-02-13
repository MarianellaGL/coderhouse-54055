let favoriteList = [];

const addFavorites = () =>{
    const storedFavorites = localStorage.getItem('favorites');
    console.log('storedFavorites', storedFavorites)

    if(storedFavorites){
        favoriteList = JSON.parse(storedFavorites)
    }
}


const deleteFavorites = () =>{
    localStorage.removeItem("favorites");
    console.log("lista de favoritos eliminada");
}


document.addEventListener('DOMContentLoaded', function() {
    const characterList = document.getElementById('character-list')

    fetch("https://rickandmortyapi.com/api/character")
    .then((response)=>response.json())
    .then((data)=> data.results.forEach(character => {

        const characterElement = document.createElement('div')
        characterElement.classList.add('character')
        
    

    characterElement.innerHTML = `
    <img src="${character.image}" alt="${character.name}" />
    <p>${character.name}</p>
    <button class="add-to-favorites">Agregar a favoritos</button>`

    characterList.appendChild(characterElement);

    const characterImage = characterElement.querySelector('img')
    const characterName = characterElement.querySelector('p').textContent


    characterImage.addEventListener('click', function(){
        modalImage.src= characterImage.src;
        modalName.textContent = characterName
        modalInfo.textContent = 'cargando info....'

        modal.style.display = "block";


        fetch(`https://rickandmortyapi.com/api/character/${character.id}`)
        .then(response => response.json())
        .then((data)=>{
            modalInfo.textContent = data.status + "-" + data.species;
               })
        .catch((error)=> console.error(error))       
        
    })

    characterImage.addEventListener('load', function(){
        const addToFavoritesBtn = characterElement.querySelector('.add-to-favorites')
    
        addToFavoritesBtn.addEventListener('click', function(){
            const favoriteCharacter ={
                name: characterName,
                image: character.image
            }
       
        
        favoriteList.push(favoriteCharacter);
        console.log('personaje agregado a favoritos', favoriteList)
    })

        localStorage.setItem('favorites', JSON.stringify(favoriteList))
    })




}))

const modal = document.getElementById('character-modal')
const modalImage= document.getElementById('modal-image')
const modalName =document.getElementById('modal-name')
const modalInfo = document.getElementById('modal-info')
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener('click', function(){
    modal.style.display="none"
})

})