import { PromptForm } from "../PromptForm";
import "./createSection.css";

export const CreateSection = () => {
  return (
    <section className="create-section">
      <div className="create-content-wrapper">
        <div className="create-section-text">
          <h1>Create</h1>
          <p>Enter three ingredients of your choice and let us do the rest.</p>
        </div>
        <PromptForm />
      </div>
    </section>
  );
};
