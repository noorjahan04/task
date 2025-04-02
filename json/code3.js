function manageStudents() {
    let students=["Alice","Bob","Charlie"];
    students.splice(1,0,"David");
    console.log("Updated students list:",students); 
    console.log("Is Eve in the list?",students.includes("Eve"));
    console.log("Student names as a string:",students.join(",")); 
    students.splice(2,0,"Eve");
    console.log("After adding Eve at index 2:",students); 
    console.log("Is Eve in the list now?", students.includes("Eve")); 
    console.log("Updated student names as a string:", students.join(",")); 
}
manageStudents();