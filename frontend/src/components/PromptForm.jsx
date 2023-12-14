// Mounted in page: Login. Represents a form where users can input a list of ingredients, submit the form, and receive a generated recipe. 
import './promptform.css';
import { recipeStore } from '../stores/recipeStore';

// Define the PromptForm component
export const PromptForm = () => {
    // Destructure the addNewRecipe function from the recipeStore
    const { inputRecipe, setInputRecipe, fetchNewRecipe, generateRecipe } = recipeStore()

    // Define the form submission handler function
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            //Use the generateRecipe function from the recipeStore
            await generateRecipe(inputRecipe)

            //Clear inputRecipe and fetch new recipe data
            setInputRecipe("")
            fetchNewRecipe()

        } catch (error) {
            console.error("Error in handleFormSubmit", error)
        }
    };

    // Render the component. Form element
    return (
        <div className="promptform-wrapper">
            <h1>OpenAIrFeast</h1>
            <form onSubmit={handleFormSubmit}>
                <textarea
                    placeholder="Your ingredients"
                    value={inputRecipe}
                    onChange={(e) => setInputRecipe(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Create recipe 🥘</button>
            </form>
        </div>
    );
};