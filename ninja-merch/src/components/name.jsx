import { createSignal } from "solid-js";

function Name() {
  const [name, setName] = createSignal("Basil");

  const changeName = (event) => {
    debugger;
    setName(event.target.value);
  };

  return (
    <div>
      <input name="name" value={name()} onInput={changeName} />
      <p>My Name is {name()}</p>
    </div>
  );
}

export default Name;
