import React from 'react';
import './Question.css';
const Questions = () => {
    return (
      <div className="py-24 container mx-auto">
        <div className="text-center">
          <h3 className="text-4xl font-bold">Frequently Asked Questions</h3>
          <p className="py-2">Here some question & answerd for Bouns Marks</p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-bold">What does React Work?</h3>
          <p>
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props.Its possible to have as many components as necessary without
            cluttering your code.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-bold">
            What are the difference between Props & State?
          </h3>
          <p>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-bold">
            What does useEffect do other than fetch?
          </h3>
          <p>
            Data fetching, Timer, setting up a subscription, and manually
            changing the DOM in React components are all examples of side
            effects.as like validating input field, live filtering, trigger
            animation on new array value etc.
          </p>
        </div>
      </div>
    );
};

export default Questions;