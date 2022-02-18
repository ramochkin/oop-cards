const Manager = require('../lib/Manager')

test('Does the manager return an object', () => {
    const manager = new Manager('ramil',1,'ramil@ramil.com','911')

    expect(typeof manager).toBe('object')
})

test('Does the manager return the user inputed phone number', () => {
    const manager = new Manager('ramil',1,'ramil@ramil.com','911')

    expect(manager.officeNumber).toBe('911')
})

test('Does the getRole return the correct role', () => {
    const manager = new Manager('ramil',1,'ramil@ramil.com','911')

    expect(manager.getRole()).toBe('Manager')
})

test('Does the getOfficeNumber return the user inputed phone number', () => {
    const manager = new Manager('ramil',1,'ramil@ramil.com','911')

    expect(manager.getOfficeNumber()).toBe('911')
})