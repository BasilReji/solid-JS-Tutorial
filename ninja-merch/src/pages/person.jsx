import { For } from "solid-js";
import { createStore } from "solid-js/store";

function Person() {
  const [person, setPerson] = createStore({
    name: {
      first: "Basil",
      last: "Reji",
    },
    age: 25,
  });

  const [products, setProducts] = createStore([
    {
      title: "Ninja Tee",
      price: 10,
    },
    {
      title: "Ninja Toe",
      price: 15,
    },
  ]);

  const changeName = () => {
    setPerson("name", "first", "Mebin");
    setPerson("age", 120);
  };

  const changeProduct = (price) => {
    setProducts(0, "price", 45);

    setProducts((p) => p.price === price, "price", 56);
  };

  return (
    <div>
      <p>
        Name is {person.name.first + " " + person.name.last} and age is{" "}
        {person.age}
      </p>
      <button onclick={changeName}>Change Name</button>
      <For each={products}>
        {(product) => (
          <p>
            Product: {product.title} with price ${product.price}
          </p>
        )}
      </For>
      <button onclick={() => changeProduct(15)}>Change product</button>
    </div>
  );
}

export default Person;
