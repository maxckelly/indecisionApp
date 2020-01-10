
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: []
    }
  };

  handleDeleteOptions () {
    this.setState(() => {
      return {
        options: []
      }
    })
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

    this.setState((prevState) => {
      return {
        // Below adds a new array with the new option
        options: prevState.options.concat(option)
      }
    })
  };

  render() {

    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
};

class Header extends React.Component {

  render() {
    return (
      <div>
        <h1> {this.props.title}    </h1>
        <h3> {this.props.subtitle} </h3>
      </div>
    )
  }
};

class Action extends React.Component {

  render() {
    return (
      <div>
        <button  
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        > 
        What should I do? 
        </button>
      </div>
    )
  }
};

class Options extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        } 
        {/* This is a nested component */}
        <Option />
        <button onClick={this.props.handleDeleteOptions}> Remove All </button>
      </div>
    )
  }
};

// Setup an options prop for the Options component
// Render the length of the array
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
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

    this.setState(() => {
      return {
        error: error
      };
    })
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
