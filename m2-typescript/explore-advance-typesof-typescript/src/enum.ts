// Enum
// set of fixed string 

enum userRole {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: userRole) => {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true;
    } else return false;
}