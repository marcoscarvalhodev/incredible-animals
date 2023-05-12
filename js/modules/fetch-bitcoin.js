import _ from 'lodash';

export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const fetchBtc = await fetch('https://www.blockchain.com/ticker');
      const fetchResponse = await fetchBtc.json();

      const bitcoin = document.querySelector('.btc-preco');
      bitcoin.innerText = (1000 / fetchResponse.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin();
}



const difference = _.difference(['Banana', 'Morango', 'Uva'], ['Banana', 'cenoura', 'Abacate']);

console.log(difference);
const c = 'c';
console.log(c);




