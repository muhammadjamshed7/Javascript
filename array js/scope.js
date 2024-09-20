if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a)
// console.log(b)
// console.log(c)
function one(){
    const username="jimi"
    function two(){
        const website="swl.tech"
        // console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username="jamsshed"
    if(username==="jamsshed"){
        // const website=" jimi ki site"
        // console.log(username+website)
    }
    // console.log(website)

}
// console.log(username)



const user={
    username:"jamshed",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
// user.welcomemessage()
// user.username="hitesh"
// user.welcomemessage()

// function chai(){
//     const username={
//         username:'jamshed',
//     }
//     console.log(this.username)
// }
// chai()

// const addtwo=(num1,num2)=>num1+num2
const addtwo=(num1,num2)=>({
    username:'hitesh'

})
console.log(addtwo(3,4))