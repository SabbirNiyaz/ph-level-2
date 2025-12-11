//! Const assertion instead of enum

//TODO step 1: use "as const;"
//TODO step 2: use "keyof typeof"

// enum userRole {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }

const userRole = {
    Admin: "ADMIN",
    Editor: "Editor",
    Viewer: "Viewer"
} as const; //? Add readonly property (Modifier)

// userRole.Admin = 'super' //? not work because of 'as const'

/*
const userRole = {
readonly Admin: "Admin",
readonly Editor: "Editor",
readonly Viewer: "Viewer"
} as const;
*/

// const canEdit = (role: (typeof userRole)[keyof typeof userRole]) => {
const canEdit = (role: keyof typeof userRole) => {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true;
    } else return false;
}

const output = canEdit("Admin");
console.log(output);