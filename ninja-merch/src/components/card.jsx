import { A, Link } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function Card({ title, id }) {
  const [clicked, setClicked] = createSignal(false);
  const [age, setAge] = createSignal(25);

  setInterval(() => {
    if (age() >= 30) {
      setAge(25);
    } else {
      setAge(age() + 1);
    }
  }, 1000);

  return (
    <div
      classList={{
        basil: true,
        shiny: clicked(),
      }}
    >
      <h2>{title}</h2>
      <p>lorem ipsum my age: {age()}</p>
      <A href={`/details/${id}`}>View Details</A>
      <button onClick={() => setClicked(true)}>Click Me!!</button>
    </div>
  );
}
