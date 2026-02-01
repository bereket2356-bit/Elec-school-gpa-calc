
const credits = [4, 4, 4, 3, 3];
function getGradePoint(score) {
    if (score >= 90) return 4.00;
    else if (score >= 85) return 4.00;
    else if (score >= 80) return 3.75;
    else if (score >= 75) return 3.50;
    else if (score >= 70) return 3.00;
    else if (score >= 65) return 2.75;
    else if (score >= 60) return 2.50;
    else if (score >= 50) return 2.00;
    else if (score >= 45) return 1.75;
    else if (score >= 40) return 1.00;
    else return 0.00;
}

function calculateGPA() {
    let scores = document.querySelectorAll(".score");

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < scores.length; i++) {
        let score = Number(scores[i].value);

        if (score >= 0 && score <= 100) {
            let gradePoint = getGradePoint(score);
            totalPoints += gradePoint * credits[i];
            totalCredits += credits[i];
        }
    }

    if (totalCredits === 0) {
        alert("Please enter at least one score");
        return;
    }

    let gpa = totalPoints / totalCredits;
    document.getElementById("result").innerText =
        "GPA: " + gpa.toFixed(2);
}
