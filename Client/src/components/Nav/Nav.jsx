/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import PATHROUTES from "../../helpers/PathRoutes.helper";
import styles from "../Nav/Nav.module.css"
import RandomButton from './randomButtom/RandomButtom';

const Nav = (props) => {
    const {onSearch, onRandom} =  props;
  return (
    <div className={styles.navBar}>
      <RandomButton onRandom={onRandom} />
      <Link className={styles.home} to={PATHROUTES.HOME}>Home</Link>
      {/* <Link className={styles.about} to={PATHROUTES.ABOUT}>About</Link> */}
      <Link className={styles.about} to={PATHROUTES.FAVORITES}>Favorites</Link>
        <SearchBar onSearch={onSearch} />
    </div>
  )
}

export default Nav