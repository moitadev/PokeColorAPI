const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use( express.json() )

const pokemons = [
    {id: 1, name: 'bulbasaur', color: '#399494', rgb: 'rgb(57, 148, 148)' },
    {id: 2, name: 'ivysaur', color: '#209483', rgb: 'rgb(32, 148, 131)' },
    {id: 3, name: 'venusaur', color: '#20b49c', rgb: 'rgb(32, 180, 156)' },
    {id: 4, name: 'charmander', color: '#ff9441', rgb: 'rgb(255, 148, 65' },
    {id: 5, name: 'charmeleon', color: '#cd3939', rgb: 'rgb(205, 57, 57)' },
    {id: 6, name: 'charizard', color: '#ee8329', rgb: 'rgb(238, 131, 41)' },
    {id: 7, name: 'squirtle', color: '#5a9ca4', rgb: 'rgb(90, 156, 164)' },
    {id: 8, name: 'wartortle', color: '#8bacf6', rgb: 'rgb(139, 172, 246)' },
    {id: 9, name: 'blastoise', color: '#5a8bcd', rgb: 'rgb(90, 139, 205)' },
    {id: 10, name: 'caterpie', color: '#31ac41', rgb: 'rgb(49, 172, 65)' },
    {id: 11, name: 'metapod', color: '#6a8b5a', rgb: 'rgb(106, 139, 90)' },
    {id: 12, name: 'butterfree', color: '#eeeeff', rgb: 'rgb(238, 238, 255)' },
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
    {id: 26, name: 'raichu', color: '#f6ac29', rgb: 'rgb(246, 172, 41)' },
    {id: 27, name: 'sandshrew', color: '#cdb400', rgb: 'rgb(205, 180, 0)' },
    {id: 28, name: 'sandslash', color: '#8b6218', rgb: 'rgb(139, 98, 24)' },
    {id: 29, name: 'nidoran♀', color: '#d5d5ff', rgb: 'rgb(213, 213, 255)' },
    {id: 30, name: 'nidorina', color: '#8bc5cd', rgb: 'rgb(139, 197, 205)' },
    {id: 31, name: 'nidoqueen', color: '#628bac', rgb: 'rgb(98, 139, 172)' },
    {id: 32, name: 'nidoran♂', color: '#bd62c5', rgb: 'rgb(189, 98, 197)' },
    {id: 33, name: 'nidorino', color: '#945ab4', rgb: 'rgb(148, 90, 180)' },
    {id: 34, name: 'nidoking', color: '#a45294', rgb: 'rgb(164, 82, 148)' },
    {id: 35, name: 'clefairy', color: '#ffd5bd', rgb: 'rgb(255, 213, 189)' },
    {id: 36, name: 'clefable', color: '#ffc5b4', rgb: 'rgb(255, 197, 180)' },
    {id: 37, name: 'vulpix', color: '#e6946a', rgb: 'rgb(230, 148, 106)' },
    {id: 38, name: 'ninetales', color: '#e6c552', rgb: 'rgb(230, 197, 82)' },
    {id: 39, name: 'jigglypuff', color: '#ffaca4', rgb: 'rgb(255, 172, 164)' },
    {id: 40, name: 'wigglytuff', color: '#ffacbd', rgb: 'rgb(255, 172, 189)' },
    {id: 41, name: 'zubat', color: '#8bb4ee', rgb: 'rgb(139, 180, 238)' },
    {id: 42, name: 'golbat', color: '#ac52ac', rgb: 'rgb(172, 82, 172)' },
    {id: 43, name: 'oddish', color: '#8bac31', rgb: 'rgb(139, 172, 49)' },
    {id: 44, name: 'gloom', color: '#4a6a7b', rgb: 'rgb(74, 106, 123)' },
    {id: 45, name: 'vileplume', color: '#de4a5a', rgb: 'rgb(222, 74, 90)' },
    {id: 46, name: 'paras', color: '#ffac62', rgb: 'rgb(255, 172, 98)' },
    {id: 47, name: 'parasect', color: '#ee3131', rgb: 'rgb(238, 49, 49)' },
    {id: 48, name: 'venonat', color: '#8b6aa4', rgb: 'rgb(139, 106, 164)' },
    {id: 49, name: 'venomoth', color: '#f6deff', rgb: 'rgb(246, 222, 255)' },
    {id: 50, name: 'diglett', color: '#b4ac73', rgb: 'rgb(180, 172, 115)' },
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