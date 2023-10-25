import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const cartContext = createContext();

function ContextProvider(props) {
  const [items, setItems] = createStore([
    {
      title: "Text Prdct",
      quantity: 2,
      id: 12,
      price: 34,
    },
    {
      title: "Text Prdct2",
      quantity: 2,
      id: 123,
      price: 34,
    },
  ]);

  return (
    <cartContext.Provider value={{ items, setItems }}>
      {props.children}
    </cartContext.Provider>
  );
}

export default ContextProvider;

export function useCartContext() {
  return useContext(cartContext);
}
