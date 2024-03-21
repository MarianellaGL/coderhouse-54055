import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd, onRemove }) => {
  const [count, setCount] = useState(initial);

  const handleCountChange = (value) => {
    const newCount = count + value;
    if (newCount >= 0 && newCount <= stock) {
      setCount(newCount);
    }
    if (value === 1) {
      onAdd(1)
    }
    if (value === -1) {
      onRemove(1)
    }
  };


  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => handleCountChange(-1)}
        className="bg-gray-200 px-3 py-1 rounded-l"
      >
        -
      </button>
      <input
        type="text"
        value={count}
        readOnly
        className="w-10 text-center bg-gray-100"
      />
      <button
        onClick={() => handleCountChange(1)}
        className="bg-gray-200 px-3 py-1 rounded-r"
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;