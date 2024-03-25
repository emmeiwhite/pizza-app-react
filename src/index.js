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
    <div className={`${!soldOut ? "pizza" : "pizza sold-out"}`}>
      <img
        src={photoName}
        alt="pizza"
      />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{!soldOut ? price : " Sold Out"}</span>
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
    // skills: [
    //   { id: 1, name: "HTML+CSS 💪", bgColor: "#FFD700" }, // Gold
    //   { id: 2, name: "JavaScript 💪", bgColor: "#87CEEB" }, // Sky Blue
    //   { id: 3, name: "React JS 💪", bgColor: "#90EE90" }, // Light Green
    //   { id: 4, name: "Git and Github 👍", bgColor: "#9370DB" }, // Medium Purple
    //   { id: 5, name: "Tailwind CSS 👍", bgColor: "#00CED1" }, // Dark Turquoise
    // ],
  };

  const skills = [
    { id: 1, level: "advanced", name: "HTML+CSS", bgColor: "#EED700" },
    { id: 2, level: "advanced", name: "JavaScript", bgColor: "#87CEEB" },
    { id: 3, level: "advanced", name: "React JS", bgColor: "#90EE90" },
    {
      id: 4,
      level: "intermediate",
      name: "Git and Github",
      bgColor: "#9370DB",
    },
    {
      id: 5,
      level: "intermediate",
      name: "Tailwind CSS",
      bgColor: "#00CED1",
    },
  ];
  return (
    <section className="container">
      <Header />
      <Menu />
      <Footer />

      <hr />

      <ProfileCard
        {...profile}
        skills={skills}
      />
    </section>
  );
};

// Let's create components to be used in the application
function Menu() {
  // Rendering list

  //   const pizzaData = [];
  const pizzaList =
    pizzaData.length > 0 ? (
      pizzaData.map((pizza) => (
        <Pizza
          {...pizza}
          key={pizza.name}
        />
      ))
    ) : (
      <p>
        The Pizza's are being prepared, wait until we upload the pizza menu!
        Sorry for any inconvenience
      </p>
    );
  return <main className="menu">{pizzaList}</main>;
}
function Header() {
  const styles = {}; //inline styles
  return (
    <header className="header">
      <h1 style={styles}>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Order({ closeTime }) {
  return (
    <div className="order">
      <p>We're open until {closeTime}:00 pm. Come visit us or order online</p>

      <button className="btn">Order</button>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openTime = 8;
  const closeTime = 22;
  const isOpen = hour >= openTime && hour <= closeTime;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeTime={closeTime} />
      ) : (
        <p>The Restaurant is closed and with open at {openTime}:00 am</p>
      )}{" "}
      <br />
      <p style={{ textAlign: "right" }}>
        {" "}
        &copy; Pizza Palace {new Date().toLocaleTimeString()}
      </p>
    </footer>
  );
}

const root = ReactDOM.createRoot(el);
root.render(<App />);
