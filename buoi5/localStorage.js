localStorage.setItem("name", "Thang");
localStorage.setItem("job", "Teacher");
localStorage.setItem("age", "25");

let teacherName = localStorage.getItem("name");
console.log(teacherName);
localStorage.removeItem("name");
// localStorage.clear();