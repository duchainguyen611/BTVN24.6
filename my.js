
function sumMinMax(arr){
    let arr2 = [];
    let arr3 = [];
    let sum = 0;
    for(let i=0;i<5;i++){
        sum+=arr[i];
    }
    let sum0 = sum - arr[0];
    let sum1 = sum - arr[1];
    let sum2 = sum - arr[2];
    let sum3 = sum - arr[3];
    let sum4 = sum - arr[4];
    arr2.push(sum0,sum1,sum2,sum3,sum4);
    let min = arr2[0];
    let max = arr2[0];
    for(let i=1;i<5;i++){
        if(min>arr2[i]){
            min = arr2[i];
        }
        if(max<arr2[i]){
            max = arr2[i];
        }
    }
    arr3.push(min,max);
    return arr3;
}

let number = [];
for(let i=0;i<5;i++){
    number[i]=+prompt("Nhap so thu "+(i+1));
}
console.log(sumMinMax(number));
