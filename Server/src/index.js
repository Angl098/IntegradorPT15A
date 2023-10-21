// const http = require("http");
// const getCharById = require('./controllers/getCharById'); 
// const PORT = 3001; 

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const { url } = req;
    
//     if (url.includes('/rickandmorty/character')) {
//         const id = Number(url.split('/').pop());
//         getCharById(res, id);
//     }
// }).listen(PORT, 'localhost');

// const express = require('express');
// const router = require('./routes/index')

// const server = express();

// server.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Credentials', 'true');
    //     res.header(
        //         'Access-Control-Allow-Headers',
        //         'Origin, X-Requested-With, Content-Type, Accept'
        //     );
        //     res.header(
            //         'Access-Control-Allow-Methods',
            //         'GET, POST, OPTIONS, PUT, DELETE'
            //     );
            //     next();
            // });
            
            // server.use(express.json())

const server = require('./app');
const { conn } = require('./DB_connection');

const PORT = 3001;

conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {console.log(`Server running into ${PORT} Port`);}); 
})
// server.listen(PORT, async ()=> {
//     await conn.sync({ force: true });
//     console.log(`Listening on port ${PORT}`)
// });