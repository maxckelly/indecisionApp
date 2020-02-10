import React from 'react';

// Setup an options prop for the Options component
// Render the length of the array
const Option = (props) => (
  <div>
    {props.optionText}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;