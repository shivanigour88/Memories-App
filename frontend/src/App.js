import React  from 'react'
import { Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Auth from './components/Auth/Auth.js';
import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom';



const App = () => {
   const user = JSON.parse(localStorage.getItem('profile'));

   return (
   <Router>
      <Container maxWidth = "xl">
         <Navbar/>
         <Routes>
            <Route exact path="/" element={<Navigate to="/posts" />} />
            <Route exact path="/posts" element = {<Home/>} />
            <Route exact path="/posts/search" element = {<Home/>} />
            <Route exact path="/posts/:id" element = {<PostDetails/>} />
            <Route exact path="/auth" element = {<Auth/>} />
          </Routes>
      </Container>
   </Router>
  )
}

export default App
