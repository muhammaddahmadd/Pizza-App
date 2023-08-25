import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Crown Pizza",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/crownn.jpg",
    soldOut: false,
  },
  {
    name: "Pepporoni Pizza",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/peporoni.jpeg",
    soldOut: false,
  },
  {
    name: "Stuff Crust Pizza",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/stuffed.png",
    soldOut: false,
  },
  {
    name: "Behari Kebeb Pizza",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/supreme.jpg",
    soldOut: false,
  },
  {
    name: "Salamino Pizza",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Prosciutto Pizza",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", textTransform: "uppercase" };

  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Welcome to the Fast Pizza Shop</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  // const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>--Menu--</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authetic Pizza cuisine. 6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} /> //name={Pizza.name} photoName={pizza.photoName} not a good practice
            ))}
          </ul>
        </>
      ) : (
        <p>No Pizzas Left</p>
      )}

      {/* 
      <Pizza
        name="Stuffed Pizza"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/stuffed.png"
        price={10}
      />

      <Pizza
        photoName="pizzas\supreme.jpg"
        name="Pizza Behari"
        ingredients="Tomato, kebab, cheese and olives"
        price={12}
      ></Pizza> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  console.log({ pizzaObj });
  // if (props.pizzaObj.soldOut === false)
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>Sold Out</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
        <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We are currently open");
  // else alert("Sorry we are closed!");

  // if (!isOpen)
  //   return (
  //     <p>
  //       We're happy to welcome you between {openHour} and {closeHour}
  //     </p>
  //   );

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. <strong>We are closed!!</strong> */}
      {isOpen ? (
        <Order closeHours={closeHour} openHours={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour} and {closeHour}
        </p>
      )}
    </footer>
  );
}

function Order({ openHours, closeHours }) {
  return (
    <div className="order">
      <p>
        We are open from {openHours} until {closeHours}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// function Footer1() {
//   return React.createElement("footer", null, "We are currently closed");
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
