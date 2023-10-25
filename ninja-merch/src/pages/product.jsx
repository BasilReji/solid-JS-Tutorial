import { For, Show, createResource, useContext } from "solid-js";
import Card from "../components/card";
const fetchProducts = async () => {
  const res = await fetch("http://localhost:4000/products");

  return res.json();
};

function ProductList() {
  const [products] = createResource(fetchProducts);

  return (
    <>
      <Show when={products()} fallback={<p>Loading...</p>}>
        <For each={products()}>
          {(product) => (
            <Card key={product.id} title={product.title} id={product.id} />
          )}
        </For>
      </Show>
    </>
  );
}

export default ProductList;
