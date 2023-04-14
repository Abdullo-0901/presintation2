// if( a){
//     var a= 8;
// }
// console.log(a);

// let b =8;
// function scope(){
//     b = 10;
// }
// scope()


// console.log(c);
// hoisting()
// function hoisting(){
//     var c = 8
// }
// console.log(d);

// let d = 10;

// console.log(e);
// const e = 20;

// referenceError();
// function referenceError(){
    
//     console.log(`hello my name is ${name} i am ${year} years old`)
//     const name = "Abdulloh";
//     const age = 2023-2002;
//     console.log(x);
// }

// function rec(a){
//     if(a==1){
//         return 1
//     }
//     return a+rec(a-1)
// } 
// console.log(rec(5));
function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }


// function plus(n){
//     return function(a){
//          return a+n
//     }
// }
// let psum = plus(5)
// console.log(psum(2));
// console.log(psum(-8));

//  rekursiya 2

function sum(a){
   if(a > 0){

       if(a <= 10){
           return a
       }
   
       return a%10+sum( Math.floor(a/10))
   }
   else{
    return 'you can not input negative number'
   }
        
}
console.log(sum(-999));
// function plus(a,b){
//     return function(){
//          return a*b
//     }
// }
// let sumPlus =plus(5,3)
// console.log(sumPlus(5,3));


// function rec(a){
//     if(a == 1){
//         return 1
//     }
//     return a+rec(a-1)
// }
// console.log(rec(10));

// function fac(b){
//    if(b == 1){
//     return 1
//    }
//    return b*fac(b-1)
// }

// console.log(fac(5));

// function counter(a){
//     let inc = 0;
//    return function(){
//         return inc++
//     }
// }
// let inc = counter() 
// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(inc());