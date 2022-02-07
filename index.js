// const soma = (num1, num2)=>{
//    return num1 + num2
// }
function soma() {
    return Object.values(arguments).reduce((memo, currente) => memo + currente, 0)
}

module.exports = soma