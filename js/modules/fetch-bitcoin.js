export default function bitcoin(url, element) {
  async function fetchBitcoin() {
    try {
      const fetchBtc = await fetch(url);
      const fetchResponse = await fetchBtc.json();

      const btc = document.querySelector(element);
      btc.innerText = (1000 / fetchResponse.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin();
}





