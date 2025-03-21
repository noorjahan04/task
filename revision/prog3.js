function determineAccess(person) {
    const role = person.role;
    const experience = person.experience;
    const active = person.active;
    const department = person.department;
    let access = "";
    if (role === "admin") {
        if (!active) {
            access = "Admin Access Revoked";
        } else if (experience > 5 && department === "IT") {
            access = "Full IT Admin Access";
        } else if (experience > 5) {
            access = "Full General Admin Access";
        } else {
            access = "Limited Admin Access";
        }
    } else if (role === "manager") {
        if (!active) {
            access = "Manager Access Revoked";
        } else if (experience > 3 && department === "Sales") {
            access = "Full Sales Manager Access";
        } else if (experience > 3) {
            access = "Full Manager Access";
        } else {
            access = "Limited Manager Access";
        }
    } else if (role === "user") {
        if (!active) {
            access = "User Access Revoked";
        } else if (department === "Support") {
            access = "Priority Support Access";
        } else {
            access = "User Access";
        }
    } else {
        access = "Invalid Role";
    }
   return access;
}
console.log(determineAccess({ role: "admin", experience: 7, active: true, department: "IT" })); 
console.log(determineAccess({ role: "manager", experience: 4, active: true, department: "Marketing" }));
console.log(determineAccess({ role: "user", experience: 2, active: true, department: "Support" }));
console.log(determineAccess({ role: "admin", experience: 3, active: false, department: "Finance" }));
