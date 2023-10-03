let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body); 
    return res.json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    const favFiltered = myFavorites.filter((char) => {
        return char.id !== id; // Retorno mis id que sean diferentes a id
    })
    myFavorites = favFiltered;
    return res.json(myFavorites);
};

module.exports = { postFav, deleteFav }; 