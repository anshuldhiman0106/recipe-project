import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RecipeContext } from '../ContextApi/RecipeProvider.jsx';
import 'remixicon/fonts/remixicon.css';

const RecipeDetail = () => {
  const { recipes, setRecipes, favorites, setFavorites } = useContext(RecipeContext);
  const location = useLocation();
  const navigate = useNavigate();

  const recipe = location.state?.recipe;

  if (!recipe) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">No recipe selected.</p>
      </div>
    );
  }

  const userRecipe = recipe;

  const [isAdded, setIsAdded] = useState(() =>
    favorites.some((item) => item.id === userRecipe.id)
  );

  useEffect(() => {
    setIsAdded(favorites.some(item => item.id === userRecipe.id));
  }, [favorites, userRecipe.id]);

  const addtofav = () => {
    if (!isAdded) {
      console.log("Adding to favorites");
      setFavorites((prev) => [...prev, userRecipe]);
    } else {
      console.log("Removing from favorites");
      setFavorites((prev) => prev.filter((item) => item.id !== userRecipe.id));
    }
  };

  const deleteRecipe = (recipeId) => {
    console.log(`Deleting recipe with ID: ${recipeId}`);
    setRecipes((prev) => prev.filter((item) => item.id !== recipeId));
    navigate(-1);
  };

  return (
    <div className="relative z-3 h-screen flex flex-col justify-center items-center pt-16 bg-gray-50 p-4">
      <div className="w-[fit-content] bg-gray-300 rounded-lg shadow-lg p-6 relative">
        <div className="right-12 top-7 absolute">
          <div className="relative" onClick={addtofav}>
            {!isAdded ? (
              <i className="absolute ri-heart-line text-2xl"></i>
            ) : (
              <i className="absolute ri-heart-fill text-2xl"></i>
            )}
          </div>
        </div>
        <h1 className="text-3xl text-center font-bold mb-6">{userRecipe.name}</h1>

        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {userRecipe.ingredients?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p className="text-gray-700">{userRecipe.instructions}</p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-500 cursor-pointer text-white rounded shadow"
          >
            Back
          </button>
          <button
            onClick={() => deleteRecipe(userRecipe.id)}
            className="px-4 py-2 bg-red-400 text-white rounded shadow cursor-pointer"
          >
            Delete Recipe
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
