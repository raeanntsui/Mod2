const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

introduce() {
  return `Hello. I am ${firstName} ${lastName}, and I have been teaching ${subject} for ${yearsOfExperience} years.`
}
  static combinedYearsOfExperience(teachers) {
    let sum = 0;
    for (const teacher of teachers) {
      sum += teacher.yearsOfExperience;
    }
    return sum;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
