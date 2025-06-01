import React from 'react'
import { RecipeContext } from "../ContextApi/RecipeProvider";
import { useNavigate } from "react-router-dom";

const Fav = () => {
    const navigate = useNavigate();
  const { favorites } = React.useContext(RecipeContext);


  const detailRecipe = (recipe) => {
    navigate("/singlerecipepage", { state: { recipe } });
  };
    if (favorites.length === 0) {
        return (
        <div className="pt-16 h-screen flex items-center justify-center bg-gray-100">
            <p className="text-lg text-gray-500">No favorite recipes available.</p>
        </div>
        );
    }
  return (
    <div className="pt-16 h-screen flex flex-col  items-center bg-gray-100">
      <h1 className="text-2xl font-bold text-center my-4">Favorite Recipes</h1>
      <div className=" grid grid-cols-4 auto-cols-max gap-4 p-4 justify-start overflow-x-auto">
        {favorites.length > 0 ? (
          favorites.map((recipe, index) => (
            <div onClick={() => { detailRecipe(recipe) }} key={index} className="border p-4 rounded text-center shadow cursor-pointer">
              <h2 className="text-xl font-semibold">{recipe.name}</h2>

            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No recipes available.</p>
        )}
      </div>
    </div>
  )
}

export default Fav
