import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    if (!stored) localStorage.setItem("favorites", JSON.stringify([]));
    return stored ? JSON.parse(stored) : [];
  });

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      const fetched = response.data.recipes;
      setRecipes(fetched);
      localStorage.setItem("recipes", JSON.stringify(fetched));
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    }
  };

  const syncFavoritesWithRecipes = (favoritesList, recipesList) => {
    return favoritesList.filter(fav =>
      recipesList.some(recipe => recipe.id === fav.id)
    );
  };

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (!storedRecipes || JSON.parse(storedRecipes).length === 0) {
      fetchRecipes();
    }
  }, []);

  useEffect(() => {
    const updatedFavorites = syncFavoritesWithRecipes(favorites, recipes);
    setFavorites(updatedFavorites);

    localStorage.setItem("recipes", JSON.stringify(recipes));
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }, [recipes]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, favorites, setFavorites }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
