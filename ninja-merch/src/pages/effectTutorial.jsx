import { createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";

function EffectTutorail() {
  const [count, setCount] = createSignal(0);
  const [person, setPerson] = createStore({
    name: "Basil",
    age: 25,
  });

  const int = setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  createEffect(() => {
    if (count() === 10) clearInterval(int);
  }, []);

  createEffect(()=>{
    console.log(person);
  })

  return <p>{count()}</p>;
}

export default EffectTutorail;
