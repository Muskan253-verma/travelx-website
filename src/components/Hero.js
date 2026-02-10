import { useState } from "react";
import "./Hero.css";
import heroImage from "../assets/hero.jpg";

function Hero() {
  const [clicked, setClicked] = useState(false);

  return (
    <section id="home"className="hero">
      <div className="hero-text">
        <h1>
          LIFE IS SHORT <br />  TRAVEL MORE ✈️<br />
        </h1>

        <p>
          {clicked
            ? "Your adventure starts now 🚀"
            : "Explore the world with us and create unforgettable memories."}
        </p>

        <button onClick={() => setClicked(true)}>
          {clicked ? "Booked!" : "Explore Now"}
        </button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Travel" />
      </div>
    </section>
  );
}

export default Hero;
