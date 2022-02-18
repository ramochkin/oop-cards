const Employee = require('../lib/Employee')

test('Does this return a new object', ()=> {
    const employee = new Employee();
    
    expect(typeof employee).toBe('object')
})

test('Does the new Employee return the user inputed name', () => {
    const employee = new Employee('ramil');
    
    expect(employee.name).toBe('ramil')
})

test('Does the new Employee return the user inputed id', () => {
    const employee = new Employee('ramil',1);

    expect(employee.id).toBe(1)
})

test('Does the new Employee return the user inputed email', () => {
    const employee = new Employee('ramil',1,'ramil@ramil.com');

    expect(employee.email).toBe('ramil@ramil.com')
})

test('Does the getName return the user inputed name', () => {
    const employee = new Employee('ramil',1,'ramil@ramil.com');

    expect(employee.getName()).toBe('ramil')
})

test('Does the getId return the user inputed id', () => {
    const employee = new Employee('ramil',1,'ramil@ramil.com');

    expect(employee.getId()).toBe(1)
})

test('Does the getEmail return the user inputed email', () => {
    const employee = new Employee('ramil',1,'ramil@ramil.com');

    expect(employee.getEmail()).toBe('ramil@ramil.com')
})
test('Does the getRole return the user inputed role', () => {
    const employee = new Employee('ramil',1,'ramil@ramil.com');

    expect(employee.getRole()).toBe('Employee')
})