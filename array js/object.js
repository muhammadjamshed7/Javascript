const jsUser={
    name:'jamshed',
    "fullName":"Muhammad Jamshed",
    age:23,
    qualification:'Bs computer science',
    email:'jamshed@google.com',
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
console.log(jsUser.email)
console.log(jsUser["qualification"])
console.log(jsUser["fullName"])
jsUser.name="jimi"
console.log(jsUser)

jsUser.email="hello@gmail.com"
Object.freeze(jsUser)
jsUser.email="hot@gmail.com"
console.log(jsUser)

jsUser.greeting=function(){
    console.log("Hello Js user")
}
jsUser.greeting2=function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(jsUser.greeting2())
