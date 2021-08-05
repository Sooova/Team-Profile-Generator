const manager = require("../lib/manager");

describe ('manager', () => {
    const result = new manager('suva','10','pokharel.suva@gmail.com','20');
    describe('getOfficeNumber', () => {
        it('should return the inputted OfficeNumber', () => {
            const getOfficeNumberOutput = '20';
            
            const getOfficeNumberResult = result.getOfficeNumber();

            expect(getOfficeNumberResult).toBe(getOfficeNumberOutput);
        })
    })
    describe('getRole', () => {
        it('should return the overridden role of "Manager"', () => {
            const getRoleOutput = 'Manager';

            const getRoleResult = result.getRole();

            expect(getRoleResult).toBe(getRoleOutput);
        })
    })

})