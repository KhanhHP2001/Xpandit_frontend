import { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hello worlds</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default HomePage;
