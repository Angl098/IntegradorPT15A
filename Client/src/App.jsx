import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PATHROUTES from "./helpers/PathRoutes.helper.js";

import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from './components/Favorites/Favorites';

function App() {

  const {pathname} = useLocation()
  const [characters, setCharacters] = useState([])
  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const EMAIL = 'angeles@gmail.com'; 
  // const PASSWORD = '123456';
  
  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate('/home');
  //   }
  // }
  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = 'http://localhost:3001/rickandmorty/login/';
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //       const { access } = data;
  //       setAccess(data);
  //       access && navigate('/home');
  //   });
  // }
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  
  // const onSearch = (id) => {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
  //     if (data.name) {
  //       setCharacters((oldChars) => [...oldChars, data]);
  //     } else {
  //       window.alert('¡No hay personajes con este ID!');
  //     }
  //   });
  // }
  const onSearch = async (id) => {
    try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } 
    } catch (error) {
      window.alert('¡No hay personajes con este ID!');
    }
  }
const onClose = (id) => {
  setCharacters(
    characters.filter((char) => {
      return char.id !== (id)
    })
  )
}

  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch}/> }
      <Routes>
        <Route path={'/'} element={<Form login={login} />}/> 
        <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path={PATHROUTES.ABOUT} element={<About/>}/>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
        <Route path={PATHROUTES.FAVORITES} element={<Favorites />}/>
      </Routes> 
    </div>
  );
}

export default App;
