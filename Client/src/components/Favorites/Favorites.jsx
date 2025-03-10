import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { filterCards, orderCards} from "../../redux/actions";
import { useState } from 'react';
import styles from "./Favorites.module.css"

const Favorites = (props) => {
    const dispatch = useDispatch()
    const { myFavorites } = props; 
    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    };

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    };

    return (
    <div className={styles.favorites}>
        <div className={styles.filter}>
        <select className={styles.filterButtom} onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select className={styles.filterButtom} onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        </div>
        <div className={styles.cards}>
            {myFavorites.map((char) => {
            return(
                <Card 
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                origin={char.origin.name}
                image={char.image}/>
            );
        })}
        </div>
        
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites); 