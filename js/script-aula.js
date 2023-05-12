/*new Date()*/
//O construtor Date cria um objeto contendo valores como mês, dia, ano, horário, e mais. A data é baseada no relógio interno do computador. Se nenhum dado for passado assim será feito

const agora = new Date();

console.log(agora, '"agora" é todos os valores');//semana Mês Dia Ano HH:MM:SS GMT

console.log(agora.getDate(), '"agora.getDate()" é Dia');//Dia
console.log(agora.getDay(), '"agora.getDay()" é Dia da semana ex: 5 = Fri de 0 a 6');
console.log(agora.getMonth(), '"agora.getMonth()" numero dia do mês que vai de 0 a 11');
console.log(agora.getFullYear(), '"agora.getFullYear()" é ano');
console.log(agora.getHours(), '"agora.getHours()" é hora');
console.log(agora.getMinutes(), '"agora.getMinutes()" é minutos');
console.log(agora.getTime(), '"agora.getTime()" é ms desde 1970');
console.log(agora.getUTCHours() - 3, '"agora.getUTCHours() - 3" é Brasilia');

/*getTime()*/

//O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.
const futuro = new Date('May 16 2023 12:58:25 ');

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}//transformar milliseconds em dias



console.log(`se passaram ${transformarDias(agora.getTime())} dias`);

const diasAgora = transformarDias(agora);
const diasFuturo = transformarDias(futuro);

console.log(Math.floor(diasFuturo - diasAgora));//futuro - agora



