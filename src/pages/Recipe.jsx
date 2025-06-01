import React from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../ContextApi/RecipeProvider";




const Recipe = () => {

  const navigate = useNavigate();
  const { recipes } = React.useContext(RecipeContext);
  console.log(recipes);

  const detailRecipe = (recipe) => {
    
    navigate("/singlerecipepage", { state: { recipe } });
  };

  return (
    <div className="pt-16 h-screen flex flex-col  items-center bg-gray-100">
      <h1 className="text-2xl font-bold text-center my-4">Recipes</h1>
      <div className=" grid grid-cols-4 auto-cols-max gap-4 p-4 justify-start overflow-x-auto">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div onClick={()=>{detailRecipe(recipe)}} key={index} className="border p-4 rounded text-center  hover:bg-gray-400 shadow cursor-pointer">
              <h2 className="text-xl font-semibold">{recipe.name}</h2>

            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No recipes available.</p>
        )}
      </div>
    </div>
  );
};

export default Recipe;
