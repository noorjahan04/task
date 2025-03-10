function determineAccess(person) {
    const { role, experience, active, department } = person;

    return role === "admin" ? (
        active ? (
            experience > 5 ? (
                department === "IT" ? "Full IT Admin Access" : "Full General Admin Access"
            ) : "Limited Admin Access"
        ) : "Admin Access Revoked"
    ) : role === "manager" ? (
        active ? (
            experience > 3 ? (
                department === "Sales" ? "Full Sales Manager Access" : "Full Manager Access"
            ) : "Limited Manager Access"
        ) : "Manager Access Revoked"
    ) : role === "user" ? (
        active ? (
            department === "Support" ? "Priority Support Access" : "User Access"
        ) : "User Access Revoked"
    ) : "Invalid Role";
}

let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
console.log(determineAccess(person1));

let person2 = { role: "manager", experience: 4, active: true, department: "Marketing" };
console.log(determineAccess(person2)); 

let person3 = { role: "user", experience: 2, active: true, department: "Support" };
console.log(determineAccess(person3));

let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };
console.log(determineAccess(person4)); 