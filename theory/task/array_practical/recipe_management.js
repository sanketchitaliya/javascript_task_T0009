// Recipe data get from localstorage
let recipes = JSON.parse(localStorage.getItem('store')) || [];

// Add a new recipe
function addRecipe(name, ingredients, instructions, category) {
  const newRecipe = { id: recipes.length + 1, name, ingredients, instructions, category };
  recipes.push(newRecipe);
  saveRecipes();
  console.log(`Recipe added: ${name}`);
}

// Edit an existing recipe
function editRecipe(id, name, ingredients, instructions, category) {
  const index = recipes.findIndex((recipe) => recipe.id === id);
  if (index!== -1) {
    recipes[index].name = name;
    recipes[index].ingredients = ingredients;
    recipes[index].instructions = instructions;
    recipes[index].category = category;
    saveRecipes();
    console.log(`Recipe updated: ${name}`);
  } else {
    console.log(`Recipe not found: ${id}`);
  }
}

// Delete a recipe

function deleteRecipe(id) {
  const index = recipes.findIndex((recipe) => recipe.id === id);
  if (index!== -1) {
    recipes.splice(index, 1);
    saveRecipes();
    console.log(`Recipe deleted: ${id}`);
  } else {
    console.log(`Recipe not found: ${id}`);
  }
}

// List all recipes

function listRecipes() {
  console.log('Recipes:');
  recipes.forEach((recipe) => console.log(`  ${recipe.id} - ${recipe.name} - ${recipe.category}`));
}

// Search recipes by ingredient
function searchRecipes(ingredient) {
  const results = recipes.filter((recipe) => recipe.ingredients.includes(ingredient));
  console.log(`Recipes with ${ingredient}:`);
  results.forEach((recipe) => console.log(`  ${recipe.id} - ${recipe.name} - ${recipe.category}`));
}

// Save recipes to local storage
function saveRecipes() {
  localStorage.setItem('store', JSON.stringify(recipes));
}




addRecipe('masala-dhosa', ['cheese', 'salt', 'sugar'], 'good items', 'Southindian');
addRecipe('cheese-paper', ['medium', 'hard', 'soft'], 'our special items', 'southindian-pro');
listRecipes();

searchRecipes('medium');

editRecipe(1, 'sandwich', ['tomato', 'bread', 'katch-up', 'oraga'], 'our all items include amul cheese butter', 'fast-sood');
listRecipes();

deleteRecipe(2);
listRecipes();

