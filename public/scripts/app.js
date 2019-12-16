'use strict';

console.log("App.js is running");

var optionsObject = {
  title: 'Star Wars',
  subtitle: 'The Sith',
  options: []
};

function todoArray(optionsObject) {
  if (optionsObject.options.length > 0) {
    return 'Here are your options: ' + optionsObject.options;
  } else {
    return "No options available";
  }
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();

  // The below is collecting the value that the user enters into the input field
  var userInputValue = event.target.elements.option.value;

  if (userInputValue) {
    // The below pushes the input value to the options array in optionsObject
    optionsObject.options.push(userInputValue);

    // The below resets the input value to an empty string
    event.target.elements.option.value = '';

    // The below re renders the app
    renderApp();
  }
};

// The below function removes everything from the options array in optionsObject
var removeAll = function removeAll() {

  // The below removes all the items from the arrays
  optionsObject.options = [];

  // The below re renders the app
  renderApp();
};

var appRoot = document.getElementById("app");

// The below is a way of rendering React without components 
var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h3',
      null,
      ' ',
      optionsObject.title
    ),
    React.createElement(
      'ul',
      null,
      optionsObject.length > 0 ? 'Here are your options' : "No options"
    ),
    React.createElement(
      'p',
      null,
      ' ',
      optionsObject.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      ' Remove All Options '
    ),
    React.createElement(
      'ul',
      null,
      todoArray(optionsObject)
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        ' Add Option '
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
