import { Link, Route, Routes } from "@solidjs/router";
import Home from "./pages/home";
import ProductList from "./pages/product";
import Details from "./pages/details";
import Person from "./pages/person";
import EffectTutorail from "./pages/effectTutorial";
import { useCartContext } from "./context/provider";
function App() {
  let { items } = useCartContext();

  const quantity = items.reduce((acc, current) => acc + current.quantity, 0);

  return (
    <div>
      <header>
        <span class="material-symbol-outlined">light_mode</span>
        <h1>Ninja Merch</h1>
        <Link href="/">Home</Link>
        <span>{"        "}</span>
        <Link href="/product" children="Products" />
        <span>{"        "}</span>
        <Link href="/cart" children={`Cart (${quantity})`} />
      </header>

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/product" component={ProductList} />
        <Route path="/person" component={Person} />
        <Route path="/effect" component={EffectTutorail} />
        <Route path="/details/:id" component={Details} />
      </Routes>
    </div>
  );
}

export default App;
