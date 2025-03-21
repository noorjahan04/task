let user={name:"Alice",role:"admin",active:false};

if(user.role=="admin" && user.active){
  console.log("Admin Acess Granted!")
}else if(user.role=="admin" && !user.active){
  console.log("Admin Access Revoked")
}else if(user.role==user && user.active){
  console.log("User Access Granted!")
}else if(user.role==user && !user.active){
  console.log("User Access Revoked")
}else{
  console.log("Access Denied")
}