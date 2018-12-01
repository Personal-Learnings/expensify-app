class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    //We are binding the handleDeleteOptions method because the this
    //context will not be available in the handleDeleteOptions method
    //We can also do in the event call like onClick="this.handleDeleteOptions.bind(this)"
    //When we do this bind in the constructor we need not call the
    //bind each time when you invoke the method.
    //this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  componentDidMount() {
    try {
      const jsonString = localStorage.getItem("options");

      if (jsonString) {
        const options = JSON.parse(jsonString);
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const jsonString = JSON.stringify(this.state.options);
      localStorage.setItem("options", jsonString);
    }
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  /*
    The above the shorthand way of writing the below code.
    When ever using aero functions you can written a object 
    when wrapped within ()   
    this.setState(() => {
      return {
        options: []
      };
    });
  */

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const chosenOption = this.state.options[randomNum];
    console.log(chosenOption);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add Item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already Exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
    /*
    The above is the short way of writting the below code
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });*/
  }

  render() {
    //const title = "Indecision"; Commenting as it is coming from default props
    const subTitle = "Put your life in the hands of a Computer.";

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

//Stateless Functional Components
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

//Default Props: Will be picked up when the
//props valid props were not passed/found
IndecisionApp.defaultProps = {
  options: []
};

Header.defaultProps = {
  title: "Indecision"
};

//Stateless Functional Components
const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should i do ?
      </button>
    </div>
  );
};

//Stateless Functional Components
const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {!props.options.length && <p>Please Add an Option to get Started.</p>}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

//Stateless Functional Components
const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const optionTxt = e.target.elements.optionTxt;
    const error = this.props.handleAddOption(optionTxt.value.trim());

    this.setState(() => ({ error }));

    if (!error) {
      optionTxt.value = "";
      optionTxt.focus();
    }

    //This statement error can also be return as error: error
    //as both left and right are same in es6 we can
    //write shortly like this too.

    //The above is the short way of writting the below code
    /*this.setState(() => {
      return { error };
    });*/
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionTxt" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
// We can pass default values while loading
//ReactDOM.render(<IndecisionApp options={["Hello"]} />, document.getElementById("app"));
