const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    courseName: 'Java',
    admissionYear: 2020,
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    courseName: 'Android',
    admissionYear: 2020,
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    courseName: 'JavaScript',
    admissionYear: 2019,
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    courseName: 'Python',
    admissionYear: 2018,
  },
];
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.admissionYear;
  }
}
class Students {
  constructor(students) {
    this.students = students;
  }
}
Students.prototype.getInfo = function () {
  return this.students
    .sort((a, b) => b.admissionYear - a.admissionYear)
    .map(({
      firstName, lastName, admissionYear, courseName,
    }) => (new Student(firstName, lastName, admissionYear, courseName)
    ))
    .map((item) => `${item.fullName} - ${item.courseName}, ${item.course} курс`);
};
const studentsList = new Students(studentsData);
console.log(studentsList.getInfo());
