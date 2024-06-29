import React from "react";
// import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import "./Progressbar.css";

const Progressbar = ({ currentStep, setCurrentStep, complete }) => {
  const steps = [
    { step: "Service" },
    { step: "Catégorie" },
    { step: "Segments" },
    { step: "Formulaire" },
    { step: "Confirmation" },
  ];

  // const handleStepClick = (stepId) => {
  //   setCurrentStep(stepId);
  // };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item  ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
              } `}
          >
            <div className="step"> {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p>{step.step}</p>
          </div>
        ))}</div>
    </div>
  );
};

export default Progressbar;
