import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

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
      </form>
    </section>
  );
}

export default App;
