export default function initFunctionamento() {

}

const funcionamento = document.querySelector('[data-semana]');
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);//turned each of items in Array into numbers

const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);


console.log(diasSemana, 'diasSemana');

console.log(horarioSemana, 'horarioSemana');

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

console.log(diaAgora, 'diaAgora');
console.log(horarioAgora, 'horarioAgora');



const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

console.log(semanaAberto);

const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
//8 a 18
if (semanaAberto && horarioAberto) {
  funcionamento.classList.add('aberto');
}
