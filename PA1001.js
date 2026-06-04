let numbers = [1,2,3,4,5,6,7,8,9,10]
let i = 0;

while (i < numbers.length){
    if (numbers[i] % 2 === 0){
        console.log(numbers[i])
    }
    i++
}
     


for (let i = 1; i <= 10; i++){
    if(i === 3 || i === 6){
        continue;
    }
    console.log(i);
}


let value = [ 5,1,80,11,30, 34,40,47,52,3];
 
let p = 0;
while (p < value.length){
    for (let k = p + 1 ; k <value.length; k++){
        if(value[p] > value[k]){
            let temp = value[p];
            value[p] = value[k];
            value[k] = temp;
        }
    }
    p++;
}
console.log(value);


