// JSX - JavaScript XML

const app = {
  title: "Indecision App",
  subTitle: "Sample App",
  options: ["One", "Two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>
      {app.options && app.options.length > 0
        ? "Here are your Options"
        : "No Options"}
    </p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const user = {
  name: "Madanraj Venkatesan",
  age: 30,
  location: "Seattle, USA"
};

function getLocation(location) {
  if (location) return <p>Location: {location}</p>;
  return "Chennai, India";
}

const templateNew = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
