import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const el = document.querySelector("#root");

const Pizza = () => {
  return (
    <div>
      <img
        src="pizzas/focaccia.jpg"
        alt="pizza"
      />
      <h3>Focaccia Pizza</h3>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
};

const App = () => {
  return (
    <section className="container">
      <Header />
      <Menu />
      <Footer />
    </section>
  );
};

// Let's create components to be used in the application
function Menu() {
  return (
    <main className="menu">
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}
function Header() {
  const styles = {}; //inline styles
  return (
    <header className="header">
      <h1 style={styles}>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openTime = 8;
  const closeTime = 22;

  if (hour >= openTime && hour <= closeTime) {
    console.log("The Restaurant is open");
  } else {
    console.log("The Restaurant is currently closed and will open at 8am");
  }
  return (
    <footer className="footer">
      {" "}
      &copy; Pizza Palace {new Date().toLocaleTimeString()}! We are currently
      open
    </footer>
  );
}

const root = ReactDOM.createRoot(el);
root.render(<App />);
