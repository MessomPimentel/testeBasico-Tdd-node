//Tdd
const soma = require('./')

const expect = (result) => ({
    toBe: (expected) => {
        if (result == expected) {
            console.log('\x1b[32m', 'Teste passoou!')
        } else {
            console.log('\x1b[31m', 'Teste falhoou!')
        }
    },

    notToBe: (expected) => {
        if (result !== expected) {
            console.log('\x1b[32m', 'Teste passoou!')
        } else {
            console.log('\x1b[31m', 'Teste falhoou!')
        }
    },

})

const it = (description, cb) => {
    console.log('--', description)
    cb()
}

it('Should sum 50 values', () => {

    expect(soma(50, 10)).toBe(60)
    expect(soma(50, 10)).notToBe(60)
})


it('Should sum 4 values', () => {

    expect(soma(10, 20, 60, 10)).notToBe(300)
})


it('Should sum 5 values', () => {

    expect(soma(50, 10, 20, 60, 10)).toBe(150)
})
