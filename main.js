let date = new Date()
let currentYear = date.getFullYear()
function calcAge(yearOfBirth){
    return console.log("You are either " + (currentYear-yearOfBirth-1) + " or " +(currentYear-yearOfBirth))
}
const age1 = calcAge(1989)
age1


function isPrime(num){
    if(num%2==0){return console.log(false)}
    else if(num%3==0){return console.log(false)}
    else if (num %5==0){return console.log(false)}
    else if(num %7==0){return console.log(false)}
    else if(num %11==0){return console.log(false)}
    else{return console.log(true)}
}

isPrime(13)

function arrAverage(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return console.log(sum/arr.length)
}

const myArr = [5,7,2,5]
arrAverage(myArr)

function checkUp(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){return console.log(true)}
    
    }
    return console.log(false)
}
checkUp(myArr, 44)


function matchUp(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<num){ console.log(arr[i])}
    
    }return
}

matchUp(myArr,6)