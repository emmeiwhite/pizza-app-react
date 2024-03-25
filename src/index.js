import React from "react";
import ReactDOM from "react-dom/client";
import ProfileCard from "./components/ProfileCard";
// import pizzaData from "../public/data";

import "./index.css";
const el = document.querySelector("#root");

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const Pizza = ({ name, ingredients, photoName, price, soldOut }) => {
  return (
    <div className="pizza">
      <img
        src={photoName}
        alt="pizza"
      />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

const App = () => {
  const profile = {
    userName: "Imran Rafiq",
    userImage: "pizzas/focaccia.jpg",
    aboutUser:
      "I am a Frontend web developer. I love to create React Applications and UI",
    skills: [
      { id: 1, name: "HTML+CSS 💪", bgColor: "#FFD700" }, // Gold
      { id: 2, name: "JavaScript 💪", bgColor: "#87CEEB" }, // Sky Blue
      { id: 3, name: "React JS 💪", bgColor: "#90EE90" }, // Light Green
      { id: 4, name: "Git and Github 👍", bgColor: "#9370DB" }, // Medium Purple
      { id: 5, name: "Tailwind CSS 👍", bgColor: "#00CED1" }, // Dark Turquoise
    ],
  };
  return (
    <section className="container">
      <Header />
      <Menu />
      <Footer />

      <hr />

      <ProfileCard {...profile} />
    </section>
  );
};

// Let's create components to be used in the application
function Menu() {
  // Rendering list

  const pizzaList = pizzaData.map((pizza) => (
    <Pizza
      {...pizza}
      key={pizza.id}
    />
  ));
  return (
    <main className="menu">
      {/* <Pizza
        pizzaName="Focaccia Pizza"
        aboutPizza="Bread with italian olive oil and rosemary"
        pizzaImg="pizzas/focaccia.jpg"
        price={35}
      />

      <Pizza
        pizzaName="Pizza Margherita"
        aboutPizza="Tomato, mozarella, ham, aragula, and burrata cheese"
        pizzaImg="pizzas/margherita.jpg"
        price={15}
      /> */}

      {pizzaList}
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
