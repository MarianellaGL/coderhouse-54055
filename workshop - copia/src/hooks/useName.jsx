import { useEffect, useState } from "react";

export const useName = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const data = {
      name: 'Name',
    };

    setName(data.name);
  }, []);

  return name;
};
