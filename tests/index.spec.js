const indexFunction = require('../index');

describe('populateMarkdown', () => {
    it('should return html syntax pre-populated with inputted data', () => {
        //setup
        // const input = ['suva','manager','10','pokharel.suva@gmail.com','300'];
        const populateOutput = `<div><h2>suva</h2><h3>Manager</h3><ul><li>ID: 10</li><li><a href="mailto:pokharel.suva@gmail.com">pokharel.suva@gmail.com</a></li><li>Office Number: 300</li></div>`
        
        //action
        const result = populateMarkdown('suva','Manager','10','pokharel.suva@gmail.com','300');

        //assertion
        expect(result).toBe(populateOutput);
    })
})
// unneccessary test
// describe('generateMarkdown', () => {
//     describe('Markdown with an empty array', () => {
//         it('should return a message saying no members have been added, and run the teamRole function again', () => {
//             const insertMarkdownOutput = 'No members have been added yet! Please add at least one member.'
//             const insertMarkdownInput = [];
//             const result = generateMarkdown(insertMarkdownInput);

//             expect(result).toBe(insertMarkdownOutput);
//         })
    
//     })
// })