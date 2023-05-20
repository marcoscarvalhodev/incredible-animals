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





