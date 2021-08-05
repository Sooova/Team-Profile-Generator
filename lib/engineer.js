const employee = require('./employees');

class engineer extends employee {
    constructor(name,id,email,github) {
        super(name,id,email);
        this.Github = github;
    }
    getGithub() {
        return this.Github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = engineer;