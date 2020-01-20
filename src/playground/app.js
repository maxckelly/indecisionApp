
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      // Passes the default array
      options: []
    }
  };

  // The below is getting the data from local storage.
  componentDidMount() {

    try {
      // The below is getting the items from local storage and loading them in.
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }))
      }
    } catch(err) {

    }

  };

  // The below is saving the items to local storage after every action.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  };

  handleDeleteOptions () {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  };

  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption (option) {
    // Below is if option field is empty return the error
    if (!option) {
      return 'Enter valid value to add item';
      // The below says if already exits then return error
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } 

    // Below adds a new array with the new option
    this.setState((prevState) => ({ 
      options: prevState.options.concat(option)
    }));
  };

  render() {

    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
};

const Header = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
      {props.subTitle && <h3> {props.subTitle} </h3>}
    </div>
  )
}

// The below sets a default title to the header if its not defined
Header.defaultProps = {
  title: 'Indecision',
  subTitle: 'Put your life in the hands of a computer'
}

// Stateless function component
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
        </button>
    </div>
  )
};

const Options = (props) => {
  return (
    <div>
      {props.options.length === 0 && <p> Please add an option </p>}
      {
        props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
      {/* This is a nested component */}
      <Option />
      <button onClick={props.handleDeleteOptions}> Remove All </button>
    </div>
  )
};

// Setup an options prop for the Options component
// Render the length of the array
const Option = (props) => {
  return (
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
  )
}

class AddOption extends React.Component {

  constructor (props) {
    super (props)
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    };
  };

  handleAddOption (event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error}));

    if (!error) {
      event.target.elements.option.value = '';
    }
  };
  
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <p> Option form goes here </p>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button> Submit </button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
