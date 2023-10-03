import { useState } from "react";
import styles from './SearchBar.module.css'

/* eslint-disable react/prop-types */
const SearchBar = (props) => {
  const [id, setId] = useState('')

  const handleChange = (e) => {
    setId(e.target.value)
    // console.log(id)
  }
  const { onSearch } = props;
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapperSearch}>
        <input className={styles.input} type="search" placeholder="Write ID..." onChange={handleChange} value={id}/>
        <button className={styles.boton} onClick={() => onSearch(id)}>Agregar</button>
      </div>
    </div>
  );
}

export default SearchBar;