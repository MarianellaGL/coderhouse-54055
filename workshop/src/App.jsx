import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { withApprovalCard } from './hoc/withApprovalCard'
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './render-props/ApprovalCard'
import useName from './hooks/useName'
function App() {
  const name = useName();
  //const [poke, setPoke] = useState([])

  // const CommentWithApprovalCard = withApprovalCard(CommentDetail)

  /* useEffect(() => {
     const fetchData = async () => {
       const res = await fetch("https://pokeapi.co/api/v2/pokemon")
       const resFormatted = await res.json();
       setPoke(resFormatted.results);
     }
     fetchData()
   }, [])*/

  /* useEffect(() => {
     const fetchData = async () => {
       const res = await fetch("https://api.mercadopago.com/v1/payments?access_token=123434")
       const resFormatted = await res.json()
       console.log(resFormatted)
     }
     fetchData()
   }, [])*/


  return (
    <>

      {
        /*
          {
            poke.length > 0 &&
            poke.map(({ name, url }) => (
              <>
                <h1 key={name}>{name}</h1>
                <a>{url}</a>
              </>
            ))
          }
         */
      }
      {/*<CommentWithApprovalCard author="Marian" date="Hoy a las 15:06" message="I love React" />*/}
      {/**   <ApprovalCard
        render={
          name => (
            <CommentDetail
              author="Marian" date="Hoy a las 15:06" message="I love React" name={name} />
          )

        } />
        */}
      <CommentDetail author="Marian" date="Hoy a las 15:06" message="I love React" name={name} />
    </>
  )
}

export default App
