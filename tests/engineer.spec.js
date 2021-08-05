const engineer = require('../lib/engineer');

describe ('engineer', () => {
    const result = new engineer('suva','10','pokharel.suva@gmail.com','Sooova');
    describe('getGithub', () => {
        it('should return the inputted Github Username', () => {
            const getGithubOutput = 'Sooova';
            
            const getGithubResult = result.getGithub();

            expect(getGithubResult).toBe(getGithubOutput);
        })
    })
    describe('getRole', () => {
        it('should return the overridden role of "engineer"', () => {
            const getRoleOutput = 'Engineer';

            const getRoleResult = result.getRole();

            expect(getRoleResult).toBe(getRoleOutput);
        })
    })

})