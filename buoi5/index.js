let name = ["Tung1", "Tung2", "Tung3"];

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

//For of
// for (let i of name) {
//     console.log(i);
// }

let teacher = {
    teacherName: "Thang",
    age: 25,
    place: "HCM",
    company: "MindX"
}

//For in: dùng để lặp trên các thuộc tính của một object 
for (let i in teacher) {
    console.log(teacher[i]);
}

