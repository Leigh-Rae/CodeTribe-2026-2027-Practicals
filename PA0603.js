let marks =[55,33,92,65,60,50,70]

let students = [{  activity1: 55,   activity2: 35,  assessment2 : 92,  assessment1 : 65,  project1: 60,   test1: 50, test2: 70}]

function calculateMarks () {
    let totalmarks = 0;
    for(let i=0; i<marks.length; i++){
        totalmarks+=marks[i];
    }
    return totalmarks ;
}
calculateMarks();
console.log(calculateMarks())
