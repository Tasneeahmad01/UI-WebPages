document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector(".searchBox input"); // Correct input selection
    const searchBtn = document.querySelector(".searchBtn");
    const recipeContainer = document.querySelector(".recipe-container");

    const fetchRecipes = (query) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(response => response.json())
            .then(data => {
                recipeContainer.innerHTML = ''; // Clear previous content
                if (data.meals) {
                    data.meals.forEach(meal => {
                        const recipeDiv = document.createElement('div');
                        recipeDiv.textContent = meal.strMeal; // Display meal name
                        recipeContainer.appendChild(recipeDiv);
                    });
                } else {
                    recipeContainer.textContent = 'No recipes found';
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const searchInput = searchBox.value.trim();  // Use "value" instead of "ariaValueMax"
        if (searchInput) {
            fetchRecipes(searchInput);
        } else {
            recipeContainer.textContent = 'Please enter a search term';
        }
    });
});
