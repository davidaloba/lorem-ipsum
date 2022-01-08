import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world");
  };
  return (
    <section className="section-center">
      <h3>tired of boring lore</h3>
      <form onClick={handleSubmit} className="lorem-ipsum">
        <label htmlFor="amounr">paragraphs</label>
        <input
          type="text"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn ">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </article>
    </section>
  );
}

export default App;
