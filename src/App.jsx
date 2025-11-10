import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IndividualBlogPost } from './components/blog/IndividualBlogPost'
import { Route, Routes } from 'react-router'
import { ContactPage } from './components/contact/ContactPage'
import { PostList } from './components/postList/PostList'
import { Homepage } from './components/Homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/posts' element={<PostList />}/>
      <Route path='/posts/:post_id' element={<IndividualBlogPost />}/>
    </Routes>
    </>
  )
}

export default App
