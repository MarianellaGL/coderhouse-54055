import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users';
import Comments from './components/Comments';
import CommentDetail from "./components/CommentDetail"

import './App.css'

/*const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/users',
    element: <Users />
  }, {
    path: '/comments',
    element: <Comments />
  }
])*/


function App() {


  return (
    <>
      {/* <RouterProvider router={router} />*/}

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/comments/:id' element={<CommentDetail />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
