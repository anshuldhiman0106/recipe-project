import React, { use, useContext } from 'react'
import { RecipeContext } from '../ContextApi/RecipeProvider.jsx';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';


const CreateRecipe = () => {

  const { recipes, setRecipes } = useContext(RecipeContext);

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = nanoid();
  const name = formData.get('title');
  const instructions = formData.get('instructions');
  const ingredients = formData.get('ingredients');
  const cookingTime = formData.get('cookingTime');
  const servings = formData.get('servings');


  if (!name || !instructions || !ingredients || !cookingTime || !servings) {
    toast.error('Please fill in all fields');
    return;
  }

  const newRecipe = {
    id,
    name,
    instructions,
    ingredients: ingredients.split(',').map(item => item.trim()),
    cookingTime,
    servings,
  };

  setRecipes(prev => [...prev, newRecipe]);
  e.target.reset();
  toast.success('Recipe created successfully!');
};


  return (
    <div className='flex justify-center items-center h-[100vh] bg-gray-100'>
    <form onSubmit={handleSubmit} className=' w-[50%] flex flex-col gap-4 p-4 bg-gray-200 rounded-lg shadow-md'>  
  <input name="title" type="text" className='outline-none border-b-1 border-gray-400 pb-2 focus:border-gray-500 focus:border-b-2' placeholder="Recipe Title" />
  <textarea name="instructions" className='outline-none border-b-1 border-gray-400 pb-2 focus:border-gray-500 focus:border-b-2' placeholder="Recipe Instructions"></textarea>
  <input name="ingredients" type="text" className='outline-none border-b-1 border-gray-400 pb-2 focus:border-gray-500 focus:border-b-2' placeholder="Ingredients (comma separated)" />
  <input name="cookingTime" type="number" className='outline-none border-b-1 border-gray-400 pb-2 focus:border-gray-500 focus:border-b-2' placeholder="Cooking Time (in minutes)" />
  <input name="servings" type="text" className='outline-none border-b-1 border-gray-400 pb-2 focus:border-gray-500 focus:border-b-2' placeholder="Servings" />
  <button className=' w-[fit-content] bg-gray-600 text-white px-3 py-2 rounded-3xl' type="submit">Create Recipe</button>
</form>

  </div>)
}

export default CreateRecipe
