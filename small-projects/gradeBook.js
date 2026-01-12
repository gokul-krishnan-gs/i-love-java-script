function getAverage(scores){
let i;
let scoreItems = scores.length;
let total = 0;
for(i=0;i<scoreItems;i++){
  total += scores[i];
}
let average = total / scoreItems;
return average;
}

function getGrade(studentScore){
  if(studentScore === 100){
    return "A+";
  }else if(studentScore <= 99 && studentScore >= 90){
    return "A";
  }else if(studentScore <= 89 && studentScore >= 80){
    return "B";
  }else if(studentScore <= 79 && studentScore >= 70){
    return "C";
  }else if(studentScore <= 69 && studentScore >= 60){
    return "D";
  }else if(studentScore <= 59 && studentScore >= 0){
    return "F";
  }
}

function hasPassingGrade(studentScore){
let grade = getGrade(studentScore);
if(grade === "F"){
  return false;
}else{
  return true;
}
}

function studentMsg(scores,studentScore){
let average = getAverage(scores);
let grade = getGrade(studentScore);
let hasPassed = hasPassingGrade(studentScore);

if(hasPassed){
  return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
}else{
  return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
}
}
