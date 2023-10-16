// const weeks=['monday','tuesday','wednesday','thrusday','friday','saturday'];
// weeks.push('sunday');
// alert("weeks",weeks);
// console.log("Weeks",weeks);
// const sorting=weeks.sort();
// console.log("Sorting",sorting)

// const array1=[1,34,23,54,65,8754]
// array1.sort();
// console.log(array1)

// function fibonacci(n){
//     const fib=[0,1];
//     for(let i =2;i<=n;i++){
// fib[i]=fib[i-1]+fib[i-2];
//     }
//     return fib[n];
// }
function greet(){
    return true;

}
greet=()=>{
//no return,this,paramater
}

async function f(){
    let promise= new Promise((resolve,reject)={
        setTimeout(() => 
            resolve("done"),2000)
        );
    })
}