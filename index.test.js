//Tdd
const soma = require('./')

const expect = (result, expected) => {
    if (result == expected) {
        console.log('\x1b[32m', 'Teste passoou!')
    } else {
        console.log('\x1b[31m', 'Teste falhoou!')
    }
}

const it = (description, cb) => {
    console.log('--', description)
    cb()
}

it('Eu espero que a função soma, ao receber dois valores, retorne a soma dos valores', () => {
    const num1 = 10
    const num2 = 50
    const result = soma(num1, num2)
    const expected = 60

    expect(result, expected)
})
