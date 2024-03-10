import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/AsyncMock";

const CommentDetail = () => {
  const { id } = useParams();
  const [com, setCom] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getComments().then((res) => {
      const result = res.filter(i => i.id === parseInt(id))
      setCom(result)
      setLoading(false)
    })

  }, [])


  if (loading) return <h1>cargando....</h1>



  return (<>
    {
      com.map((c) => {
        return <div key={c.id}>
          <h1>{c.comment}</h1>
        </div>
      })
    }
  </>);
}

export default CommentDetail;