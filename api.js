// const spinner = (spinnerStyle) => {
//     const spinner = document.querySelector('.spinner-border').style.display = spinnerStyle
// }
// spinner()

const searchCocktail =()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = "";
    // console.log(searchText);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showResults(data.drinks))
}

const showResults = drinks =>{
    const searchResults = document.getElementById('search-results');
    drinks.forEach( drink =>{
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${drink.strCategory}</h5>
            <h2>name: ${drink.strCategory} </h2>
            <p>${drink.strDrink}</p>
            <button class='text-white bg-success border rounded' onclick="loadDrinkDetails('${drink.idDrink}')">Detail</button>
          </div>
        </div>
      </div>
        `
    searchResults.appendChild(div)
})
}

const loadDrinkDetails = drinkId =>{
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
     
       fetch(url)
      .then(res =>res.json())
      .then(data => displayDrinkDetails(data.drinks))
}

const displayDrinkDetails = drinkss =>{
    const drinkDetails = document.getElementById('drinks-details');
    // const div = document.createElement('div');
    // div.classList.add('card');
    drinkss.forEach(drink => {
        // console.log(drink);
        const div = document.createElement('div');
        div.classList.add('drinks-details');
        div.classList.add('myStyle');
        div.innerHTML = `
        <img class='w-50'  src="${drink.strDrinkThumb}" alt="">
        <h2> ${drink.strAlcoholic} </h2>
        <p>${drink.strIngredient2}</p>
         `
        drinkDetails.appendChild(div)
})
}