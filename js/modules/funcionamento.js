export default class Functionamento {
  constructor(select, activeClass) {
    this.selectFunc = document.querySelector(select);
    this.activeClass = activeClass;
  }

  buscarDados() {
    this.diasSemana = this.selectFunc.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.selectFunc.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);

    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.selectFunc.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.selectFunc) {
      this.buscarDados();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}


