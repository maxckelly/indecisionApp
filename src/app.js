class IndecisionApp extends React.Component {
  render() {

    // The below consts define the data which is then passed in classes like Header and Options
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one ', 'Thing two ', 'Thing three '];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options} />
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

  handlePick() {
    alert('Hanlde Pick')
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePick}> What should I do? </button>
      </div>
    )
  }
};

class Options extends React.Component {

  handleRemoveAll () {
    alert('Remove All')
  };

  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        } 
        {/* This is a nested component */}
        <Option />
        <button onClick={this.handleRemoveAll}> Remove All </button>
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
