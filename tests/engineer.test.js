const Engineer = require('../lib/Engineer')

test('Does the engineer return an object', () => {
    const engineer = new Engineer('ramil',1,'ramil@ramil.com','ramochkin')

    expect(typeof engineer).toBe('object')
})

test('Does the engineer return the user inputed name', () => {
    const engineer = new Engineer('ramil',1,'ramil@ramil.com','ramochkin')

    expect(engineer.name).toBe('ramil')
})

test('Does the engineer return the user inputed id', () => {
    const engineer = new Engineer('ramil',1,'ramil@ramil.com','ramochkin')

    expect(engineer.id).toBe(1)
})

test('Does the engineer return the user inputed email', () => {
    const engineer = new Engineer('ramil',1,'ramil@ramil.com','ramochkin')

    expect(engineer.email).toBe('ramil@ramil.com')
})

test('Does the engineer return the user inputed github', () => {
    const engineer = new Engineer('ramil',1,'ramil@ramil.com','ramochkin')

    expect(engineer.github).toBe('ramochkin')
})

test('Does the getGithub return the user inputed github', () => {
    const engineer = new Engineer('ramil',1,'ramil@ramil.com','ramochkin')

    expect(engineer.getGithub()).toBe('ramochkin')
})

test('Does the getRole return the correct role', () => {
    const engineer = new Engineer('ramil',1,'ramil@ramil.com','ramochkin')

    expect(engineer.getRole()).toBe('Engineer')
})