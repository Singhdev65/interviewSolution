var arr1 = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];

var count = 0;
var result = 0;

for(let i=0; i<arr1.length; i++){
    if(arr1[i]===1){
        count = 0
    }else {
        count++
        result=Math.max(result,count)
    }
}
console.log(result);