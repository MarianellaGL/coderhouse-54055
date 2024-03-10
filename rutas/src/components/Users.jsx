import { useEffect, useState } from "react";
import { getUsers } from '../utils/AsyncMock';

const Users = () => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {

    getUsers().then(res => {
      setUser(res);
      setLoading(false)
    })
  }, [])

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchInput(value)
  }

  if (loading) return <h1>Cargando....</h1>


  const filteredUsers = user.length > 0 && searchInput !== '' ? user.filter((u) => u.mail.toLowerCase().includes(searchInput.toLowerCase())) : user;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('informacion enviada')
  }

  return (
    <>
      {
        user.length > 0 && filteredUsers.map((u) => {
          return <div key={u.userId}>
            <p>{u.name} - {u.mail} - {u.onLine ? "Conectado" : "Desconectado"}</p>
          </div>

        })
      }
      {
        /*<input type="text" placeholder="Buscá el usuario" value={searchInput} onChange={(e) => handleSearch(e)} />
      <button onClick={() => alert('holaaaaa')}>Presiona este boton</button>*/
      }
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Buscá el usuario" value={searchInput} onChange={(e) => handleSearch(e)} />
        <button type="submit">send</button>
      </form>
    </>
  );
}

export default Users;