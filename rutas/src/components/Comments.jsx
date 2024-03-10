import { useEffect, useState } from "react"
import { getComments } from "../utils/AsyncMock"
import { Link } from "react-router-dom"

const Comments = () => {
  const [comment, setComment] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    getComments().then(res => {
      setComment(res);
      setLoading(false)
    })
  }, [])

  if (loading) return <h1>Cargando....</h1>

  return (<>
    {
      comment.length > 0 && comment.map((c) => {
        return <div key={c.id}>
          <Link to={`/comments/${c.id}`}>{c.id}</Link>
        </div>

      })
    }</>);
}

export default Comments;