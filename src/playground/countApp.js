class Counter extends React.Component {

  constructor (props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    // The below is default state value.
    this.state = {
      count: 0
    };
  }


  componentDidMount () {

    try {
      const json = localStorage.getItem('count');
      const count = JSON.parse(json);

      if (count) {
        this.setState(() => ({ count: count }))
      }
    } catch(err) {
      
    }
  };

  componentDidUpdate (prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json)
    }
  };

  handleAddOne () {
    this.setState((prevState) => {
      return {
        // The below says get the previous state of count, then plus 1 to it.
        count: prevState.count + 1
      }
    });
  };

  handleMinusOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  };

  handleReset () {
    this.setState(() => {
      return {
        count: 0
      }
    })
  };
  render() {
    return (
      <div>
        <h1> Counter: {this.state.count} </h1>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleReset}> Reset </button>
      </div>
    )
  }
};

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const resetButton = () => {
//   count = 0;
//   renderCounterApp();
// };


// const renderCounterApp = () => {
//   const templateThree = (
//     <div>
//       <h1> Count: {count}</h1>
//       <button onClick={addOne}> +1 </button>
//       <button onClick={minusOne}> -1 </button>
//       <button onClick={resetButton}> Reset </button>
//     </div>
//   );

//   ReactDOM.render(templateThree, appRoot);
// };

// renderCounterApp();