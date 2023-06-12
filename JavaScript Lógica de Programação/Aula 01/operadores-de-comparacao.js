/* 
Operadores de comparação

> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente
!== diferente estrito (valor e tipo)

no caso dos operadores estritos, eles são mais recomendáveis do que igualdade simples, pq a igualdade simples retorna o mesmo valor, porém com tipos diferentes, isso no código pode gerar um problema, a recomendação do uso de igualdade estrita é justamente por conta dele diferenciar valores e tipos de dados

exemplo:

*/
const numero = 10;
const numero1 = '10';

console.log(numero == numero1); /// retorna true
console.log(numero === numero1); /// retorna false