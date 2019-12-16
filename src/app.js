console.log("App.js is running")

const todo = {
  title: 'Star Wars',
  subtitle: 'The Sith',
  options: ['One', 'Two']
}

function todoArray(todo) {
  if (todo.options.length > 0) {
    return `Here are your options: ${todo.options}`
  } else {
    return "No options avaliable"
  }
}

// JSX - JavaScript XML Syntax extension
let template = (
  <div>
    <h1>To do list</h1>
    <h3> {todo.title}</h3>
      <ul>{todo.subtitle ? todo.subtitle : "No subtitle added"}</ul>
      <ul>{todoArray(todo)}</ul>
  </div>
);

const users = {
  name: 'Max',
  age: 22,
  location: 'Melbourne, Victoria, Australia'
};

function userLocation(location) {
  if (location) {
    return <p> Location: {location}</p>
  }
};

const templateTwo = (
  <div>
    {/* The below renders Anonymous if no name */}
    <h1> Name: {users.name ? users.name : "Anonymous"} </h1>
    { (users.age && users.age >= 18) && (<p> Age: {users.age}</p>) }
    {userLocation(users.location)}
  </div>
);

let count = 0;
const templateThree = (
  <div>
    <h1> Count: {count}</h1>
    <button id="my-id" className="button"> +1 </button>
  </div>
);


let appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);