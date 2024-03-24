import React from "react";
import ReactDOM from "react-dom/client";

const el = document.querySelector("#root");

const Pizza = () => {
  return (
    <div>
      <img
        src="pizzas/focaccia.jpg"
        alt="pizza"
      />
      <h2>Focaccia Pizza</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
};

const App = () => {
  return (
    <section>
      <Header />
      <Menu />
      <Footer />
    </section>
  );
};

// Let's create components to be used in the application
function Menu() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Footer() {
  return (
    <p>
      {" "}
      &copy; Pizza Palace {new Date().toLocaleTimeString()}! We are currently
      open
    </p>
  );
}

const root = ReactDOM.createRoot(el);
root.render(<App />);
