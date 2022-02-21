// Exercício da Calculadora de Raphael Copeiro

/*  Calculadora Nível I
1.Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
2.Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
3.Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
4.Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
*/
let adicionar = (a, b) => a + b;
let subtracao = (a, b) => a - b;
let multiplicacao = (a, b) => a * b;
let divisao = (a, b) => a / b;

/* Calculadora Nível II
1.a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
console.log ("-------------- Teste de Operações / Calculador --------------")
2. Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
3. Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
4. Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
5. Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
*/
console.log ("-------------- Teste de Operações / Calculadora --------------");
num1 = 7
num2 = 3
let testeSoma = adicionar(num1, num2);
let testeSub = subtracao(num1, num2);
let testeMult = multiplicacao(num1, num2);
let testeDiv = divisao(num1, num2);
let testeDivPor0 = divisao(num1, 0);

console.log(`
             Sendo o número 1: ${num1}
             Sendo o número 2: ${num2} \n
             Resultado da soma: ${testeSoma}
             Resultado da subtração: ${testeSub}
             Resultado da multiplicação: ${testeMult}
             Resultado da divisão: ${testeDiv}
             Dividindo o 'número 1' por 0: ${testeDivPor0}
             `)

/* Calculadora Nível 3
1.Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().
2.Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
3.Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
4. Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
*/

let quadradoDoNumero = (a) => multiplicacao(a, a);

let mediaDeTresNumeros = (a, b, c) => {
    let soma1 = adicionar(a, b)
    let somaTotal = adicionar(soma1, c)
    let resultado = divisao(somaTotal, 3)
    return resultado; 
}

let calculaPorcentagem = (a, b) => {
    let total = multiplicacao(a, b)
    let valorPorcentagem = divisao(total,100)
    return valorPorcentagem; 
}

let geradorDePorcentagem = (a, b) => {
    let mult = multiplicacao(a, 100)
    let resultado = divisao(mult, b)
    return resultado; 
}