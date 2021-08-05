const employee = require('../lib/employees');

describe ('employee', () => {
    const result = new employee('suva','10','pokharel.suva@gmail.com');
    describe('getName', () => {
        it('should return the inputted name', () => {
            const getNameOutput = 'suva';
            
            const getNameResult = result.getName();

            expect(getNameResult).toBe(getNameOutput);
        })
    })
    describe('getId', () => {
        it('should return the inputted id', () => {
            const getIdOutput = '10';

            const getIdResult = result.getId();

            expect(getIdResult).toBe(getIdOutput);
        })
    })
    describe('getEmail', () => {
        it('should return the inputted email', () => {
            const getEmailOutput = 'pokharel.suva@gmail.com';

            const getEmailResult = result.getEmail();

            expect(getEmailResult).toBe(getEmailOutput);
        })
    })
    describe('getRole', () => {
        it('should return "employee"', () => {
            const getRoleOutput = 'Employee';

            const getRoleResult = result.getRole();

            expect(getRoleResult).toBe(getRoleOutput);
        })
    })

})