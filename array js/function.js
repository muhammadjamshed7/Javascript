function sayMyName(){
    console.log("Jamshed")
}
sayMyName()
function addTwoNum(n1,n2){
    return n1+n2

}

console.log(addTwoNum(2,4))



function loginUser(usernname){
    if(usernname===undefined){
        console.log("Please enter a user name")
        return

    }
    return `${usernname} just logged in`
}
console.log(loginUser())