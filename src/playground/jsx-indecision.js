// JSX - JavaScript XML

const app = {
  title: "Indecision App",
  subTitle: "Sample App",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const optionTxt = e.target.elements.option.value;

  if (optionTxt) {
    app.options.push(optionTxt);
    e.target.elements.option.value = "";
    render();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const chosenOption = app.options[randomNum];
  alert(chosenOption);
};

const onRemoveAll = e => {
  app.options = [];
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? "Here are your Options"
          : "No Options"}
      </p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should i do ?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
render();
