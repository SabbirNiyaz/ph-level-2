// TS Enum
// set of fixed string 
var userRole;
(function (userRole) {
    userRole["Admin"] = "Admin";
    userRole["Editor"] = "Editor";
    userRole["Viewer"] = "Viewer";
})(userRole || (userRole = {}));
var canEdit = function (role) {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true;
    }
    else
        return false;
};
