"use strict";
const studentArr = [];
const teacherArr = [];
class PERSON {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    status() {
        return this.role;
    }
}
class STUDENT extends PERSON {
    constructor(name, age, role, degree) {
        studentArr.push({ name: name, age: age, role: role, degree: degree });
        super(name, age, role);
        this.name = name;
        this.age = age;
        this.role = role;
        this.degree = degree;
    }
}
class TEACHER extends PERSON {
    constructor(name, age, role, subject) {
        super(name, age, role);
        this.name = name;
        this.age = age;
        this.role = role;
        this.subject = subject;
    }
}
function addSTUDENTs(name, age, role, degree) {
    const std = new STUDENT(name, age, role, degree);
    studentArr.push(std);
}
function teachers(name, age, role, subject) {
    const teacher = new STUDENT(name, age, role, subject);
    teacherArr.push(teacher);
}
teachers("Talha", 20, "Teaching", "ENglish");
console.log(teacherArr);
