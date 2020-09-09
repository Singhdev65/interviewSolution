var arr=[1,2,3,4,5,6,7,8,9,10,10];

var sum = (arr.length*(arr.length-1))/2;

var sum1 = 0;

for (var i =0; i<arr.length;i++){
    sum1+= arr[i]
}
console.log(sum1-sum);