 /* Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:
- 1 Preço do combustível;
- 2 Gasto médio de combustível do carro por KM;
- Distância em KM da viagem; 
Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const precoEtanol = 4.20;
const precoGasolina = 5.47;
const kmPorLitros = 15;
const distanciaEmKm = 3400;
const tipoCombustivel = 'Gasolina'; 

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));

}




