class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      showDetails: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        showDetails: !prevState.showDetails
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.showDetails ? "Hide Details" : "Show Details"}
        </button>
        {this.state.showDetails && (
          <div>
            <p>Hey. There are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
