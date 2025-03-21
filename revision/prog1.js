let students = [35, 42, 89, 91, 37, 78, 49, 92, 68, 20];
let count = 0;
let studentScores = students.map(score => {
    if (score < 40) {
        score += 20; 
    }
    if (score > 90) {
        score = 90; 
    }
    if (score >= 50) {
        count++; 
    }
    return score; 
});
console.log("Final adjusted scores:", studentScores);
console.log("Number of students passed:", count);