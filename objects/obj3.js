let user = { name: "Alice", role: "admin", active: false };
let messages={
admin:{true : "Admin Access Granted!" ,false: "Admin Access Revoked"},
user:{true: "User Access Granted!", false:"User Access Revoked"},
default: "Access Denied"
}
let message=messages[user.role] 
? messages[user.role][user.active]
:message.default;
console.log(message)