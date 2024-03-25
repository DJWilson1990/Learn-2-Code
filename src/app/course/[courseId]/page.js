"use client";

import { introLessons } from "@/resources/intro/introLessons";
import { useEffect, useState } from "react";
import Input from "@/components/Input";

export default function Course(courseId) {
  const [currentStep, setCurrentStep] = useState(0);
  const lesson = introLessons[currentStep];
  let element;
  if (lesson.userInteraction === true) {
    element = {
      name: lesson.name,
      opening_tag: lesson.opening_tag,
      closing_tag: lesson.closing_tag,
      self_closing: lesson.self_closing,
    };
  }

  const numberOfSteps = introLessons.length;

  //   useEffect(() => {
  //     setCurrentStep(currentStep + 1);
  //   }, [currentStep]);

  console.log(numberOfSteps);
  function nextStep() {
    setCurrentStep(currentStep + 1);

    console.log(currentStep);
  }

  return (
    <div>
      <h1>{`Step ${currentStep}`}</h1>
      {lesson.content}
      {lesson.userInteraction === true ? <Input element={element} /> : null}
      {lesson.userInteraction === true ? (
        <div id="output" className="border"></div>
      ) : null}

      {currentStep < numberOfSteps - 1 ? (
        <button onClick={nextStep} className="border">
          Next step
        </button>
      ) : null}
    </div>
  );
}
