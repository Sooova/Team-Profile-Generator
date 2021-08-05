const intern = require("../lib/intern");

describe ('intern', () => {
    const result = new intern('suva','10','pokharel.suva@gmail.com','Camberwell Grammar');
    describe('getSchool', () => {
        it('should return the inputted School', () => {
            const getSchoolOutput = 'Camberwell Grammar';
            
            const getSchoolResult = result.getSchool();

            expect(getSchoolResult).toBe(getSchoolOutput);
        })
    })
    describe('getRole', () => {
        it('should return the overridden role of "Intern"', () => {
            const getRoleOutput = 'Intern';

            const getRoleResult = result.getRole();

            expect(getRoleResult).toBe(getRoleOutput);
        })
    })

})