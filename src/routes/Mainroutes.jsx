import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Recipe from '../pages/Recipe'
import About from '../pages/About'
import PageNotFound from '../pages/PageNotFound'
import CreateRecipe from '../pages/CreateRecipe'
import RecipeDetail from '../pages/RecipeDetail'

import Fav from '../pages/Fav'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/singlerecipepage" element={<RecipeDetail />} />
        <Route path="/fav" element={<Fav />} />
    </Routes>
  )
}

export default Mainroutes
