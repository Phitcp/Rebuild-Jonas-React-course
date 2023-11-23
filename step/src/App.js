import { useState } from "react";
import "./app.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <Step step={step} setStep={setStep} />
    </div>
  );
}

function Step({ step, setStep }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {
        isOpen && (
          <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step={step} />
          <Button step={step} setStep={setStep} />
        </div>
        )
      }

    </>
  );
}

function StepMessage({ step }) {
  const msgs = messages;
  return (
    <div className="message">
      <h1>Step {step}</h1>
      <p>{msgs[step - 1]}</p>
      <button>Test btn</button>
    </div>
  );
}

function Button({ setStep, step }) {
  const handleAddStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <div className="button">
      <button onClick={handleBackStep}>Previous</button>
      <button onClick={handleAddStep}>Next</button>
    </div>
  );
}
export default App;
