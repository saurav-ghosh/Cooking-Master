// search button event handler
document.getElementById('searchBtn').addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchMeal.value + '')
        .then(response => response.json())
        .then(data => showMeal(data.meals))
        .catch(error => alert('sorry ! did not find any food. Try another. Thanks'))
});

// function for display meal image and meal name
const showMeal = meals => {
    const mealsDiv = document.getElementById('mealsContainer');
    document.getElementById('searchMeal').value = '';
    mealsDiv.innerHTML = '';
    mealDetails.innerHTML = '';

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'singleMeal';
        const mealList = `
            <img onclick="showFoodDetails('${meal.strMeal}')" src="${meal.strMealThumb}">
            <h5>${meal.strMeal}</h5>
        `;
        mealDiv.innerHTML = mealList;
        mealsDiv.appendChild(mealDiv);
    });
}


// image event handler
const showFoodDetails = (meal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    fetch(url)
        .then(response => response.json())
        .then(data => showDetails(data.meals))
}

// function for display food recipe
const showDetails = foods => {
    const mealDetails = document.getElementById('mealDetails');

    foods.forEach(food => {
        const mealInfo = `
            <img src="${food.strMealThumb}">
            <h3>${food.strMeal}</h3>
            <h5>ingredients</h5>
            <p><span class="ingredientHighlight">-</span> ${food.strMeasure1 +' '+ food.strIngredient1}</p>
            <p><span class="ingredientHighlight">-</span> ${food.strMeasure2 +' '+ food.strIngredient2}</p>
            <p><span class="ingredientHighlight">-</span> ${food.strMeasure3 +' '+ food.strIngredient3}</p>
            <p><span class="ingredientHighlight">-</span> ${food.strMeasure4 +' '+ food.strIngredient4}</p>
            <p><span class="ingredientHighlight">-</span> ${food.strMeasure5 +' '+ food.strIngredient5}</p>
            <p><span class="ingredientHighlight">-</span> ${food.strMeasure6 +' '+ food.strIngredient6}</p>
            <p><span class="ingredientHighlight">-</span> ${food.strMeasure7 +' '+ food.strIngredient7}</p>
            <p><span class="ingredientHighlight">-</span> ${food.strMeasure8 +' '+ food.strIngredient8}</p>
            <p><span class="ingredientHighlight">-</span> ${food.strMeasure9 +' '+ food.strIngredient9}</p>
            <p class="lastIngredient"><span class="ingredientHighlight">-</span> ${food.strMeasure10 +' '+ food.strIngredient10}</p>
        `;
        mealDetails.innerHTML = mealInfo;
    });
}