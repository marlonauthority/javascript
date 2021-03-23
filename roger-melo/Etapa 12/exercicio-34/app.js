/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/

const getRevertString = string => 
  console.log(string.split('').reverse().join(''))

const getInvertString = string => 
  console.log(string.split('').reduce((acc, letter) => letter + acc, ''))

/**
 * 1ª letter('a') + acc('') = 'a'
 * 2ª letter('b') + acc('a') = 'ba'
 * 3ª letter('c') + acc('ba') = 'cba'
 */

getRevertString('123')
getInvertString('abc')

/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33]
let foundNumber =  numbers.includes(15)

// numbers.forEach(number => {
//   if (number === 15) {
//     foundNumber = true
//   }
// })


console.log(foundNumber)

/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/
