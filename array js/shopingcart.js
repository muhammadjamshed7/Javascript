// function calculateCartPrice(...num1){
//     return num1
// }
// // console.log(calculateCartPrice(200,400,600))
// function calculateCartPrice(v1,v2,v3,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,600,500,800,101,222))
// const user={
//     username:'jamshed',
//     prize:'199'
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and prize is ${anyobject.prize}`)

// }
// console.log(handleObject(user))

const getArraydata=[1,2,3,4,5]
function getArray(){
    getArraydata.forEach((item,index)=>console.log(index,": ",item))
}
// console.log(getArray())
getArray()
const objeFunction=(obj)=>{
    return `My name is ${obj.name} and ${obj.age} years old`
}
console.log(objeFunction({
    name:'jamshed',
    age:23
}))