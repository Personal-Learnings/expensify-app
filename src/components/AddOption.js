import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
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
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="optionTxt" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
