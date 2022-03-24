const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use( express.json() )

const pokemons = [
    {id: 1, name: 'bulbasaur', color: '#399494', rgb: 'rgb(57, 148, 148)' },
    {id: 2, name: 'ivysaur', color: '#209483', rgb: 'rgb(32, 148, 131)' },
    {id: 3, name: 'venusaur', color: '#20b49c', rgb: 'rgb(57, 148, 148)' },
    {id: 4, name: 'charmander', color: '#ff9441', rgb: 'rgb(57, 148, 148)' },
    {id: 5, name: 'charmeleon', color: '#cd3939', rgb: 'rgb(57, 148, 148)' },
    {id: 6, name: 'charizard', color: '#ee8329', rgb: 'rgb(57, 148, 148)' },
    {id: 7, name: 'squirtle', color: '#5a9ca4', rgb: 'rgb(57, 148, 148)' },
    {id: 8, name: 'wartortle', color: '#8bacf6', rgb: 'rgb(57, 148, 148)' },
    {id: 9, name: 'blastoise', color: '#5a8bcd', rgb: 'rgb(57, 148, 148)' },
    {id: 10, name: 'caterpie', color: '#31ac41', rgb: 'rgb(57, 148, 148)' },
    {id: 11, name: 'metapod', color: '#6a8b5a', rgb: 'rgb(57, 148, 148)' },
    {id: 12, name: 'butterfree', color: '#eeeeff', rgb: 'rgb(57, 148, 148)' },
    {id: 13, name: 'weedle', color: '#cd7310', rgb: 'rgb(205, 115, 16)' },
    {id: 14, name: 'kakuna', color: '#cd9c10', rgb: 'rgb(205, 156, 16)' },
    {id: 15, name: 'beedrill', color: '#fff6a4', rgb: '(255, 246, 164)' },
    {id: 16, name: 'pidgey', color: '#a4625a', rgb: 'rgb(164, 98, 90)' },
    {id: 17, name: 'pidgeotto', color: '#ffe68b', rgb: 'rgb(255, 230, 139)' },
    {id: 18, name: 'pidgeot', color: '#e6b462', rgb: 'rgb(230, 180, 98)' },
    {id: 19, name: 'rattata', color: '#b473bd', rgb: 'rgb(180, 115, 189)' },
    {id: 20, name: 'raticate', color: '#a47329', rgb: 'rgb(164, 115, 41)' },
    {id: 21, name: 'spearow', color: '#ee524a', rgb: 'rgb(238, 82, 74)' },
    {id: 22, name: 'fearow', color: '#b47320', rgb: 'rgb(180, 115, 32)' },
    {id: 23, name: 'ekans', color: '#cd62b4', rgb: 'rgb(205, 98, 180)' },
    {id: 24, name: 'arbok', color: '#a483c5', rgb: 'rgb(164, 131, 197)' },
    {id: 25, name: 'pikachu', color: '#f6e652', rgb: 'rgb(246, 230, 82)' },
];

app.get('/', (req, res) => {
    res.send('Just the HEX and RGB colors of pokemon here, nothing else')
});

app.get('/api/pokemons', (req, res) => {
    res.send(pokemons);
});

app.get('/api/pokemons/:id', (req, res) => {
    const pokemon = pokemons.find(p => p.id === parseInt(req.params.id));
    if (!pokemon) res.status(404).send('Pokemon ID not found or not inserted yet');
    res.send(pokemon);
});

app.listen(
    PORT,
    () => console.log(`yes it is alive on http://localhost:${PORT}`)
)