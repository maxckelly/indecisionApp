
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);

    this.state = {
      options: ['Thing one ', 'Thing two ', 'Thing three ']
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  };

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

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
        <AddOption />
      </div>
    )
  }
}

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

  handleAddOption (event) {
    event.preventDefault();

    const userInputValue = event.target.elements.option.value.trim();

    if (userInputValue) {
      alert(userInputValue)
    };
  }
  
  render() {
    return (
      <div>
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
