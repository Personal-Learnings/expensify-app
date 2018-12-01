import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const chosenOption = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: chosenOption }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add Item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already Exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

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

  render() {
    const subTitle = "Put your life in the hands of a Computer.";

    return (
      <div>
        <Header subTitle={subTitle} />
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
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

//Default Props: Will be picked up when the
//props valid props were not passed/found
IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
