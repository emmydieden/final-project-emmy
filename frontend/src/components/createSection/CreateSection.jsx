import { PromptForm } from "../PromptForm";
import "./createSection.css"

export const CreateSection = () => {
  return (
   <section className="create-section">
    <div className="create-section-text">
      <h1>Create</h1>
      <p>Input three ingredients of your choice and let us do the rest.</p>
    </div>
   <PromptForm/>
   </section>
  )
}
