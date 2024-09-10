import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PATHROUTES from "./helpers/PathRoutes.helper.js";

import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail.jsx";
// import Form from "./components/Form/Form";
import Favorites from './components/Favorites/Favorites';
import Login from './components/Login.jsx';

function App() {

  const {pathname} = useLocation()
  const [characters, setCharacters] = useState([])
  
  const navigate = useNavigate();
  // const [access, setAccess] = useState(false);

  // async function login(userData) {
  //   try {
  //     const { email, password } = userData;
  //     const URL = 'http://localhost:3001/rickandmorty/login/';
  //     const {data} = await axios(URL + `?email=${email}&password=${password}`)
  //     const { access } = data;
  //     setAccess(data);  
  //     access && navigate('/home');
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   access && navigate('/');
  // }, [access]);
  
  
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

async function getRandomCharacter() {
  const randomId = Math.floor(Math.random() * 826) + 1;
  try {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${randomId}`)
      return response.data
  } catch (error) {
      window.alert(error.message);
  }
  
}
async function onRandom() {
  const randomCharacter = await getRandomCharacter();
  if (randomCharacter) {
      setCharacters((prevCharacters) => [...prevCharacters, randomCharacter]);
  }
}

  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} onRandom={onRandom} /> }
      <Routes>
        <Route path={'/'} element={<Login/>}/> 
        <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
        <Route path={PATHROUTES.FAVORITES} element={<Favorites />}/>
      </Routes>  
    </div>
  );
}

export default App;
