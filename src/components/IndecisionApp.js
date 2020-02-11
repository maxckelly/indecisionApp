import React from 'react';

// Components
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  }

  // The below is getting the data from local storage.
  componentDidMount() {
    try {
      // The below is getting the items from local storage and loading them in.
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }))
      }
    } catch (err) {
      console.log('error' + err);
    }
  };

  // The below is saving the items to local storage after every action.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  };


  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    // This sets the state to be the option text
    this.setState({selectedOption: option})
  };

  handleClearSelectedOption = () => {
    this.setState({ selectedOption: undefined })
  }

  handleAddOption = (option) => {
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
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
};

export default IndecisionApp;