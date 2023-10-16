


console.log("hjkiuhbnm")//string
console.log(13243)//numeric
console.log(18.25)//digits
console.log(true)//bolean
console.log([57,54,35,3,5]);//arraty
console.log({fname:'joes',age:'23'});//json
console.table({fname:'joes',age:'23'});//table
console.error("custom sample error");//error
console.warn("custom sample error");//warn
console.clear();//clear
console.time("Timer");
for(i=0;i<10;i++){
    console.log(i);
}
console.timeEnd("Timer");
var a=25;
var b=35;
console.log(a+b);
//scope
if(true){
    var msg="welcome"
}
console.log(msg);
if(true){
    let msg="welcome"
    console.log(msg);

}
console.log(msg);//its print var
//variable redeclaration
var c=23;
console.log(c);
// let c=23;
// console.log(c)
// let c=24;
// console.log(c)
var c=24
console.log(c)

const f=12;
// console.log(f);
// f=23;
// console.log(f);
//--------------------------
const student={'name':"ram","age":12};
console.table(student);
console.log(student.name);
student.name="joes";
console.table(student);
// js dynamic programing
// data type

var a=23.3;
console.log(typeof a);
var fname="tutor";
console.log(typeof fname);
const s1=Symbol()
const s2=Symbol()

console.log(s1);
console.log(s2);
console.log(s2==s1);


//number to string
let e;
e=24;
console.log(e,typeof e);
e=String(e);
console.log(e,typeof e);
e=new Date;
console.log(e,typeof e);
e=String(e);
console.log(e,typeof e);

e=[1,4,5,7];
console.log(e,typeof e);
e=String(e);
console.log(e,typeof e);

//number to string
t="1234";
console.log(typeof t,t);
t=Number(t);
console.log(typeof t,t);

r="true";
console.log(typeof r,r);
r=Number(r);
console.log(r,typeof r);

r=[1,2,3,4,5];
console.log(typeof r,r);
r=Number(r);
console.log(r,typeof r);

r="34.5";
console.log(typeof r,r);
// r=parseInt(r);
r=parseFloat(r)
console.log(r,typeof r);

//type coversion

let d="23";
let h=23;
let w=d+h;
console.log(w);

//assignment operator
let x=10;
x=x+3;
x+=4
console.log(x);

//math function
let u;
u=Math.PI
console.log(u);
//comparison
let j=10;
// let k="10";
// console.log(j===k);
// console.log(j==k);
console.assert(j)

//conditional r terniary
const age=23;
const result=age>18?"eligible":"not eligible";
console.log(result)

//handling null value
function Welcome (name){
    const resultt =name?name:"no name";
    console.log("welcome"+resultt);
}
Welcome();
Welcome(null);
Welcome("hi");


user={'name':'rakesh','age':23};
console.log(user);
console.log(user.name);

const greet=()=>{
    const name=user?user.name:"no name";
    return("hello"+name);
}
console.log(greet(user));
//Conditional chains
/* 
avg  >=90 A grade
avg  >=80 B grade
c grade
*/
const avg=90;
const grade =avg>=90?"A grade":avg>=80? "B grade":"c grade";
console.log("grade :",grade);

// if condition //promt for dynamic value enter 
// let agge=prompt("enter the age :");
// if (agge>=18){
//     console.log("you are eligible for vote");
// }else{
//     console.log("you are not eligible")
// }
 //switch
 let num =2;
 switch(num){
        case 1:
        console.log("one");
        break;
        case 2:
        console.log("two")   ;
        break;
 }

//looping statement
let o=1;
while(o<=10){
    console.log(o);
    o++;
}
console.log("---------------");

let names=["ram","raj","gaya","sundar"]
console.log(names[3]);

//do while

let table =2;limit=5;k=1;
do{
    console.log(table+"x"+k+"="+(table*k));
    k++;
}while(k<=limit);
//for loop
for(let u=1;u<=10;u++){
    console.log(u);
}
let arr=[];
for(let u=0;u<=100;u++){
    arr.push(u);
}
console.log(arr);
console.log(arr[49]);

let nums=[];
for(let k=0;k<3;k++){
    nums.push([]);
    for(let l=0;l<3;l++){
       nums[k].push(l) ;
    }
}
console.log(nums);
//looping over objects by converting to an array
// let userr={
//     name :'RAJESH',
//     age  :35,
//     city :'salem',
    
// };
// let arr_keys=object.keys(userr);
// console.table(arr_keys);



const number=[1,2,3,4,5,6,7,8,9,10];
//map(value,index,array)
let sqrt=number.map((value)=>{
    return Math.sqrt(value);
});
console.table(sqrt);
