import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { withApprovalCard } from './hoc/withApprovalCard'
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './render-prop/ApprovalCard'
import { useName } from './hooks/useName'

function App() {

  const CommentWithApprovalCard = withApprovalCard(CommentDetail);
  const name = useName();

  return (
    <>
      {/*  <CommentWithApprovalCard
        author="Marian"
        date="Today 11:00pm"
        message="I love React!"
  />*/}
      {/* <ApprovalCard
         render={
          name => (
            <CommentDetail author="Marian"
              date="Today 11:00pm"
              message="I love React!" name={name} />
          )
        }
      />*/}
      <CommentDetail author="Marian"
        date="Today 11:00pm"
        message="I love React!" name={name} />
    </>
  )
}

export default App
