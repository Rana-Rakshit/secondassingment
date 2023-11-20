// assignment no 1

const mark = 50;
if(mark >=90 && mark<=100){
    console.log("you got 'A+' gread");
}else if(mark >=80 && mark<=89){
    console.log("you got 'A' gread");
}else if(mark >=70 && mark<=79){
    console.log("you got 'B' gread");
}else if(mark >=60 && mark<=69){
    console.log("you got 'C' gread");
}else if(mark >=50 && mark<=59){
    console.log("you got 'D' gread");
}else if(mark >=0 && mark<=49){
    console.log("you got 'F' gread");
}else{
    console.log("input vaild mark");
}

// assignment no 2

var signal = ["green", "yellow", "red"];

if (signal == "red"){
    console.log("It's Danger");
}else if (signal == "yellow") {
    console.log("Stop Please");
}else {
    console.log("Cross the road");
}


// assignment no 3

const number = Math.pow(5,2);
const output = "The Squre value is :" +number;
console.log(output);