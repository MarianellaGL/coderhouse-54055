import { useEffect, useState } from "react";

const useName = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    const data = {
      name: "cualquier cosa"
    }

    setName(data.name)
  }, [])


  return name
}

export default useName;


