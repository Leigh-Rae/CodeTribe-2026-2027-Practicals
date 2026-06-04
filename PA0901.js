function checkResults(mark){
    if (mark < 40){
        console.log("fail")
    }else if( mark<60){
        console.log("Level 4 pass ")
}else if (mark < 70){
    console.log("Levl 5 pass")
}else if(mark <80){
    console.log("Level 6 pass")
}
else {
    console.log("Level 7 pass")
}

}
checkResults(35);
checkResults(90);
checkResults(50);
checkResults(40);
