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
    {id: 51, name: 'dugtrio', color: '#c57341', rgb: 'rgb(197, 115, 65)' },
    {id: 52, name: 'meowth', color: '#ffe683', rgb: 'rgb(255, 230, 131)' },
    {id: 53, name: 'persian', color: '#deb46a', rgb: 'rgb(222, 180, 106)' },
    {id: 54, name: 'psyduck', color: '#ffd54a', rgb: 'rgb(255, 213, 74)' },
    {id: 55, name: 'golduck', color: '#8bacd5', rgb: 'rgb(139, 172, 213)' },
    {id: 56, name: 'mankey', color: '#d5ac9c', rgb: 'rgb(213, 172, 156)' },
    {id: 57, name: 'primeape', color: '#e6bd9c', rgb: 'rgb(230, 189, 156)' },
    {id: 58, name: 'growlithe', color: '#fff6a4', rgb: 'rgb(255, 246, 164)' },
    {id: 59, name: 'arcanine', color: '#d5a48b', rgb: 'rgb(213, 164, 139)' },
    {id: 60, name: 'poliwag', color: '#5283c5', rgb: 'rgb(82, 131, 197)' },
    {id: 61, name: 'poliwhirl', color: '#3973ac', rgb: 'rgb(57, 115, 172)' },
    {id: 62, name: 'poliwrath', color: '#395a83', rgb: 'rgb(57, 90, 131)' },
    {id: 63, name: 'abra', color: '#ffe629', rgb: 'rgb(255, 230, 41)' },
    {id: 64, name: 'kadabra', color: '#d5bd08', rgb: 'rgb(213, 189, 8)' },
    {id: 65, name: 'alakazam', color: '#ffee18', rgb: 'rgb(255, 238, 24)' },
    {id: 66, name: 'machop', color: '#94bdbd', rgb: 'rgb(148, 189, 189)' },
    {id: 67, name: 'machoke', color: '#bd9ce6', rgb: 'rgb(189, 156, 230)' },
    {id: 68, name: 'machamp', color: '#838b94', rgb: 'rgb(131, 139, 148)' },
    {id: 69, name: 'bellsprout', color: '#5a3900', rgb: 'rgb(90, 57, 0)' },
    {id: 70, name: 'weepinbell', color: '#6ac552', rgb: 'rgb(106, 197, 82)' },
    {id: 71, name: 'victreebel', color: '#4aa47b', rgb: 'rgb(74, 164, 123)' },
    {id: 72, name: 'tentacool', color: '#6ab4e6', rgb: 'rgb(106, 180, 230)' },
    {id: 73, name: 'tentacruel', color: '#83cde6', rgb: 'rgb(131, 205, 230)' },
    {id: 74, name: 'geodude', color: '#9c9483', rgb: 'rgb(156, 148, 131)' },
    {id: 75, name: 'graveler', color: '#b4b49c', rgb: 'rgb(180, 180, 156)' },
    {id: 76, name: 'golem', color: '#9c8b52', rgb: 'rgb(156, 139, 82)' },
    {id: 77, name: 'ponyta', color: '#e65a29', rgb: 'rgb(230, 90, 41)' },
    {id: 78, name: 'rapidash', color: '#ff9c18', rgb: 'rgb(255, 156, 24)' },
    {id: 79, name: 'slowpoke', color: '#de627b', rgb: 'rgb(222, 98, 123)' },
    {id: 80, name: 'slowbro', color: '#ff9494', rgb: 'rgb(255, 148, 148)' },
    {id: 81, name: 'magnemite', color: '#8bb4a4', rgb: 'rgb(139, 180, 164)' },
    {id: 82, name: 'magneton', color: '#393131', rgb: 'rgb(57, 49, 49)' },
    {id: 83, name: 'farfetchd', color: '#e6e6a4', rgb: 'rgb(230, 230, 164)' },
    {id: 84, name: 'doduo', color: '#946a5a', rgb: 'rgb(148, 106, 90)' },
    {id: 85, name: 'dodrio', color: '#a47b5a', rgb: 'rgb(164, 123, 90)' },
    {id: 86, name: 'seel', color: '#d5cdee', rgb: 'rgb(213, 205, 238)' },
    {id: 87, name: 'dewgong', color: '#e6e6f6', rgb: 'rgb(230, 230, 246)' },
    {id: 88, name: 'grimer', color: '#944a9c', rgb: 'rgb(148, 74, 156)' },
    {id: 89, name: 'muk', color: '#bd7bbd', rgb: 'rgb(189, 123, 189)' },
    {id: 90, name: 'shellder', color: '#9c8bc5', rgb: 'rgb(156, 139, 197)' },
    {id: 91, name: 'cloyster', color: '#7b5283', rgb: 'rgb(123, 82, 131)' },
    {id: 92, name: 'gastly', color: '#d5accd', rgb: 'rgb(213, 172, 205)' },
    {id: 93, name: 'haunter', color: '#835a6a', rgb: 'rgb(131, 90, 106)' },
    {id: 94, name: 'gengar', color: '#9473b4', rgb: 'rgb(148, 115, 180)' },
    {id: 95, name: 'onix', color: '#837b7b', rgb: 'rgb(131, 123, 123)' },
    {id: 96, name: 'drowzee', color: '#f6de00', rgb: 'rgb(246, 222, 0)' },
    {id: 97, name: 'hypno', color: '#f6de00', rgb: 'rgb(246, 222, 0)' },
    {id: 98, name: 'krabby', color: '#de524a', rgb: 'rgb(222, 82, 74)' },
    {id: 99, name: 'kingler', color: '#c56a5a', rgb: 'rgb(197, 106, 90)' },
    {id: 100, name: 'voltorb', color: '#ff5220', rgb: 'rgb(255, 82, 32)' },
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