const axios = require('axios');

axios.get('https://cruzeiropedia.org/Especial:Consultar/-5B-5BElencoAtual::Sim-5D-5D/mainlabel%3D/limit%3D100/offset%3D0/format%3Djson/searchlabel%3DElenco-20Atual/prettyprint%3Dyes').then((res) => {
  const elenco = res.data.results;
  Object.keys(elenco).forEach((playerName) => {
    const player = elenco[playerName];
    console.log(playerName, player.fullurl);
  });
});