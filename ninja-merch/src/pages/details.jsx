import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import { useCartContext } from "../context/provider";

const fetchProducts = async (id) => {
  const res = await fetch("http://localhost:4000/products/" + id);

  return res.json();
};

function Details() {
  const params = useParams();
  const [products] = createResource(params.id, fetchProducts);

  let { items, setItems } = useCartContext();

  const addToCart = () => {
    // check product exists

    const exists = items.find((item) => item.id === products().id);

    if (exists)
      //inc quanity
      setItems(
        (p) => p.id === products().id,
        "quantity",
        (q) => q + 1
      );
    else {
      // add the new product
      setItems([...items, { ...products(), quantity: 1 }]);
    }
  };

  return (
    <div>
      <p>Product Details</p>

      <Show fallback={<p>Loading...</p>} when={products()}>
        <img src={products().img} alt="image" />
        <h1>{products().title}</h1>

        <button onclick={addToCart}>Add to cart</button>
      </Show>
    </div>
  );
}

export default Details;
