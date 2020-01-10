class Visibility extends React.Component {

  constructor (props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility () {
    this.setState((prevState) => {
      console.log(prevState.visibility)
      return {
        visibility: !prevState.visibility
      }
      
    })
  }

  render() {
    return (
      <div>
        <p> Visibility Toggle </p>
        <button onClick={this.handleToggleVisibility}> 
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>

      
        { this.state.visibility && (
          <div>
            <p> Hey. This is showing. </p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));