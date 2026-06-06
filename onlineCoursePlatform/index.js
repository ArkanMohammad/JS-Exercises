//Part 1 + 2  Create the Course and add Behavior
class Course {
    constructor(title, instructor, maxStudents){
        this.title = title;
        this.instructor = instructor;
        this.maxStudents = maxStudents;
        this.enrolledStudents = 0;        
    }
    enrollStudent(){
        if (this.enrolledStudents < this.maxStudents) {
            this.enrolledStudents++;
            console.log(`Student enrolled in ${this.title}. Total: ${this.enrolledStudents}/${this.maxStudents}`);
        } else {
            console.log(`${this.title} is full! Cannot enroll more students`);
        }      
    }
    toString() {
        return `Course: ${this.title} | Instructor: ${this.instructor} | Students: ${this.enrolledStudents}/${this.maxStudents}`;
    }
}
//Part 3 Create Course Instances
const jsCourse = new Course("JavaScript Basics", "Dania", 30);
const pythonCourse = new Course("Python Fundamentals", "Mohammad", 25);
console.log(`${jsCourse}`); // console.log(jsCourse.toString());
console.log(`${pythonCourse}`);
//Part 4 Use the Instances
//Add students to the JavaScriptBasics Course
console.log("\n------ Enrolling in JavaScript Basics ------");
jsCourse.enrollStudent();
jsCourse.enrollStudent();
jsCourse.enrollStudent();
jsCourse.enrollStudent();
//add students to the pythionFundamentals Course
console.log("\n------ Enrolling in Python Fundamentals ------");
pythonCourse.enrollStudent();
pythonCourse.enrollStudent();
pythonCourse.enrollStudent();
pythonCourse.enrollStudent();
pythonCourse.enrollStudent();

console.log("\n------ Information of the courses ------");
console.log(`${jsCourse}`);
console.log(`${pythonCourse}`);
