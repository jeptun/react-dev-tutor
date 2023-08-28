import { useState } from "react";

export default function App() {
  const [text, setText] = useState("test");

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleShow() {
    setText("show");
  }

  return (
    <div>
      <Input
        label="First input"
        textValue={text}
        onChange={handleChange}
        onShowChange={handleShow}
      />
      <Input
        label="Second input"
        textValue={text}
        onChange={handleChange}
        onShowChange={handleShow}
      />
    </div>
  );
}

function Input({ label, textValue, onChange, onShowChange }) {
  return (
    <label>
      {label}
      <input value={textValue} onChange={onChange} onClick={onShowChange} />
    </label>
  );
}
