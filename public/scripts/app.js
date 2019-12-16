'use strict';

console.log("App.js is running");

var todo = {
  title: 'Star Wars',
  subtitle: 'The Sith',
  options: ['One', 'Two']
};

function todoArray(todo) {
  if (todo.options.length > 0) {
    return 'Here are your options: ' + todo.options;
  } else {
    return "No options avaliable";
  }
}

// JSX - JavaScript XML Syntax extension
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'To do list'
  ),
  React.createElement(
    'h3',
    null,
    ' ',
    todo.title
  ),
  React.createElement(
    'ul',
    null,
    todo.subtitle ? todo.subtitle : "No subtitle added"
  ),
  React.createElement(
    'ul',
    null,
    todoArray(todo)
  )
);

var users = {
  name: 'Max',
  age: 22,
  location: 'Melbourne, Victoria, Australia'
};

function userLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      ' Location: ',
      location
    );
  }
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' Name: ',
    users.name ? users.name : "Anonymous",
    ' '
  ),
  users.age && users.age >= 18 && React.createElement(
    'p',
    null,
    ' Age: ',
    users.age
  ),
  userLocation(users.location)
);

var count = 0;
var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' Count: ',
    count
  ),
  React.createElement(
    'button',
    { id: 'my-id', className: 'button' },
    ' +1 '
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);
