import { Link } from "react-router-dom";
import styles from './Card.module.css'
import {addFav, removeFav} from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect} from 'react'


const Card = (props) => {
  const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props;
  
  const [isFav, setIsFav] = useState(false);
  
  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props); 
    setIsFav(!isFav); 
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
    });
  }, [myFavorites]);

  return (
    <div className={styles.card}>
      {
        isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      <button className={styles.boton} onClick={()=> onClose(id)}>-</button>

      <div className={styles.wrapper}>
        <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
        </Link>
        <div className={styles.details}> 
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin}</h2>
          </div> 
        <img src={image} alt="" />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card); 