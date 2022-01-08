import React, { useState } from "react";
import data from "./data";

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    setText(data.slice(0, amount));
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
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
