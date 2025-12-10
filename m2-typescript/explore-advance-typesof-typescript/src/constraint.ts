// Constraint (Rules enforce)

// const addStudentToCurse = 
// // extends { id: string; name: string }  => Constraint (Rules enforce)
// <T extends { id: string; name: string }>(studentInfo: T) => {
//     return {
//         course: "Level 2",
//         ...studentInfo, // use spread operator
//     }
// }

type ruleEnforce = { id: string; name: string }

const addStudentToCurse = <T extends ruleEnforce >(studentInfo: T) => {
    return {
        course: "Level 2",
        ...studentInfo, // use spread operator
    }
}

const s1 = {
    name: 'Sabbir',
    id: '22-47538-2',
    hasCGPA: false,
}
const s2 = {
    name: 'Niyaz',
    id: '22-47538-2',
    hasCGPA: false,
    hasLaptop: true,
    hasVSCode: true,
}
const s3 = {
    name: "Messi",
    id:'10',
    hasWatch: true,
}

console.log(addStudentToCurse(s1));
console.log(addStudentToCurse(s2));
console.log(addStudentToCurse(s3)); 