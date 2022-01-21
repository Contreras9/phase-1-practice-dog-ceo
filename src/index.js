console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
      .then(results => {
        results.message.forEach(image => addsImgToDOM(image))
      })

      fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(results => renderBreedList(Object.keys(results.message)))
})

// Challenge 1
function addsImgToDOM(image) {
    let div = document.querySelector('#dog-image-container')
    let newImage = document.createElement('img')
    newImage.src = image
    div.appendChild(newImage)
}

// Challenge 2
function renderBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds')
    ul.innerHTML = ''
  
    breeds.forEach(breed => appendBreedToDOM(breed))
  }

function appendBreedToDOM(breed) {
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
  
    li.innerText = breed
    ul.appendChild(li)
    li.addEventListener('click', updateBreedColor)
  }

// Challenge 3
function updateBreedColor(event) {
    event.target.style.color = 'purple'
  }

// Challenge 4
function filterBreeds() {

    let breedDropdown = document.querySelector('#breed-dropdown')
    breedDropdown.addEventListener('change', function(e) {
        
    let filterValue = e.target.value
        
    let filteredBreeds = breeds.filter(breed => breed[0] === filterValue)
    renderBreedList(filteredBreeds)
    })
}