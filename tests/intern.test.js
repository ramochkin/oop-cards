const Intern = require('../lib/intern')

test('Does the intern return an object', () => {
    const intern = new Intern('ramil',1,'ramil@ramil.com','columbia')

    expect(typeof intern).toBe('object')
})

test('Does the intern return the user inputed school', () => {
    const intern = new Intern('ramil',1,'ramil@ramil.com','columbia')

    expect(intern.school).toBe('columbia')
})

test('Does the getSchool return the user inputed school', () => {
    const intern = new Intern('ramil',1,'ramil@ramil.com','columbia')

    expect(intern.getSchool()).toBe('columbia')
})

test('Does the getRole return the correct role', () => {
    const intern = new Intern('ramil',1,'ramil@ramil.com','columbia')

    expect(intern.getRole()).toBe('Intern')
})