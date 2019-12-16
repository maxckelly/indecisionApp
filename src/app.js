console.log("App.js is running")

const optionsObject = {
  title: 'Star Wars',
  subtitle: 'The Sith',
  options: []
}

function todoArray(optionsObject) {
  if (optionsObject.options.length > 0) {
    return `Here are your options: ${optionsObject.options}`
  } else {
    return "No options available"
  }
};


const onFormSubmit = (event) => {
  event.preventDefault();
  
  // The below is collecting the value that the user enters into the input field
  const userInputValue = event.target.elements.option.value;

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
const removeAll = () => {

  // The below removes all the items from the arrays
  optionsObject.options = [];

  // The below re renders the app
  renderApp();
}

const appRoot = document.getElementById("app");

// The below is a way of rendering React without components 
const renderApp = () => {
  let template = (
    <div>
      <h3> {optionsObject.title}</h3>

      <ul>{optionsObject.length > 0 ? 'Here are your options' : "No options"}</ul>

      <p> {optionsObject.options.length}</p>

      <button onClick={removeAll}> Remove All Options </button>
      <ul>
        {todoArray(optionsObject)}
      </ul>

      {/* You do not want to call onFormSubmit() function as it will return undefined  */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button> Add Option </button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();