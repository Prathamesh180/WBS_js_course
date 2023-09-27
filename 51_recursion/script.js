let sum = 0
function sumTill10(number){
    if(number > 10) return 0

    sum += number
    console.log(sum);
    sumTill10(number+1)
}

sumTill10(1)