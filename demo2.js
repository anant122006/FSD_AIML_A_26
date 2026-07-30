const num =[11,22,32,44,5,62,36,81];
const even = num.filter((i)=>(i%2==0))
console.log("num=",num);
console.log("even=",even);
const square = num.map((i)=>(i*i));
console.log("square=",square);
const sum = num.reduce((i,s)=>(i+s))
console.log("sum=",sum);
