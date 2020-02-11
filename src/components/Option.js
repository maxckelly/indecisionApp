import React from 'react';

// Setup an options prop for the Options component
// Render the length of the array
const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button 
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;