const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammay"
tinderUser.isloggedIn=false
// console.log(tinderUser)
const regularUser={
    email:'some@gmail.com',
    fullname:{
        userfullname:'hitesh',
        lastname:'choudhary'
    }
}
// console.log(regularUser.fullname.userfullname)
const obj1={1:'a',2:'b',3:"c"}
const obj2={3:'d',5:'e',6:"f"}
// const newObj=Object.assign({},obj1,obj2)d
// console.log(newObj)

// const obj3={...obj1,...obj2}
// console.log(obj3)

const user=[
    {
        id:1,
        name:'jamshed',
    },
    {
        id:12,
        name:'jimi',
    },
    {
        id:3,
        name:'khatima',
    },
]

// console.log(user[1].email)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(tinderUser.hasOwnProperty('id'))