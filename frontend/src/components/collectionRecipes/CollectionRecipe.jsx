// This component is mounted in CollectionRecipes. Represents each recipe card.

import { Link } from "react-router-dom";

import "./collectionRecipe.css";

//Paths to images 
// const imageUrls = [
//   "/recipe-imgs/campfire-896196_1280.jpg",
//   "/recipe-imgs/camping-cooker-1853680_1280.jpg",
//   "/recipe-imgs/picnic-4246724_1280.jpg",
//   "/recipe-imgs/pot-5901086_1280.jpg",
//   "/recipe-imgs/hero-image.jpg",
// ];

const imageUrls = [
  "/icons/bag.svg", 
  "/icons/pot.svg", 
  "/icons/cooking-fire.svg", 
  "/icons/fire.svg",
  "/icons/food.svg", 
  "/icons/mountains.svg", 
  "/icons/stove.svg", 
  "/icons/thermos.svg", 
  "/icons/pan-love.svg", 
]

export const CollectionRecipe = ({ recipe, index }) => {
  // Calculate the index of the image to use based on the recipe index
  const imageIndex = index % imageUrls.length;
  const selectedImageUrl = imageUrls[imageIndex];

  return (
    <Link
      to={`/recipe-details/${recipe._id}`}
      className="collection-recipe-link"
    >
      <section className="collection-recipe-card">
      { <div className="user-input-collection">
          {recipe.userInput.map((ingredient, ingredientIndex) => (
            <div className="recipe-tag" key={ingredientIndex}>
              {ingredient}
            </div>
          ))}
        </div> }
        <div className="collection-recipe-image-container">
          <img src={selectedImageUrl} alt={recipe.title} />
          {/* Overlay div for the gradient */}
          {/* <div className="gradient-overlay"></div>{" "} */}
        </div>
        <h2>{recipe.title}</h2>

        
      </section>
    </Link>
  );
};
