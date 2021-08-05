const employee = require('./employees');

class intern extends employee {
    constructor(name, id, email, school) {
        super(name,id,email);
        this.School = school;
    }
    getSchool() {
        return this.School;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = intern;