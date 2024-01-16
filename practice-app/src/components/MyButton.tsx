import React, { useState } from "react";

interface MyButtonProps {
  text: string | number;
  onClick?: () => void;
}

interface Book {
  name: string;
  price: number;
}

const MyButton: React.FC<MyButtonProps> = ({ text }) => {
  // const [value, setValue] = useState(1) // Implicit Type Casting
  const [value, setValue] = useState<Book>({
    // Explicit Casting - Preferred Way
    name: "A",
    price: 100,
  });

  const [inputValue, setInputValue] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <h2>
        {value.name} {value.price}
      </h2>
      <button onClick={() => setValue({ name: "B", price: 200 })}>
        {text}
      </button>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter youre name"
        />
        <button type="submit">Submit</button>
      </form>

      <h1>{inputValue}</h1>
    </div>
  );
};

export default MyButton;
