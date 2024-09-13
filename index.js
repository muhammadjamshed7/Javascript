// import AppBar from '@mui/material/AppBar'
// import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
// import CardHeader from '@mui/material/CardHeader'
// import Avatar from '@mui/material/Avatar'
// import IconButton from '@mui/material/IconButton'
// import BottomNavigation from '@mui/material/BottomNavigation'
// "use strict";
// // var jimi= "jamshed";
// // let jimi2="mehsud";

// // console.table([jimi,jimi2])

// // let scrore="30";
// // console.log(typeof scrore)

// // let valueInNumber=Number(scrore)
// // // console.log(typeof(valueInNumber))
// // let loggedIn=1;
// // let booleanIslogged=Boolean(loggedIn)
// // console.log(typeof booleanIslogged)
// // console.log(booleanIslogged)
// "use strict";
// // var jimi= "jamshed";
// // let jimi2="mehsud";

// // console.table([jimi,jimi2])

// // let scrore="30";
// // console.log(typeof scrore)

// // let valueInNumber=Number(scrore)
// // // console.log(typeof(valueInNumber))
// // let loggedIn=1;
// // let booleanIslogged=Boolean(loggedIn)
// // console.log(typeof booleanIslogged)
// // console.log(booleanIslogged)

// // Function to switch tabs and scroll the page
// function switchTabsAndScroll() {
//     let tabs = window.open('', '_self'); // Open current tab for manipulation
//     let scrollDirection = 'down'; // To keep track of scroll direction
//     let scrollDistance = 10; // Distance to scroll each time

//     setInterval(() => {
//         // Switch tabs
//         if (tabs) {
//             tabs.focus();
//         }

//         // Scroll the page
//         if (scrollDirection === 'down') {
//             window.scrollBy(0, scrollDistance);
//             scrollDirection = 'up';
//         } else {
//             window.scrollBy(0, -scrollDistance);
//             scrollDirection = 'down';
//         }
//     }, 5000); // Switch tabs and scroll every 5 seconds
// }

// // Execute the function when the page loads
// window.onload = switchTabsAndScroll;
// Primitive data type and non primitive data type
// Dynamic typed langugate
// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId)

// Camel case javascript name convention

// function as a variable

// const myFun=function(){
//     console.log("Hello world")
// }
// myFun()


// <AppBar position="fixed" color="primary">
//   <Toolbar>
//     <Typography variant="h6">
      
//     </Typography>
//   </Toolbar>
// </AppBar>
// <CardHeader
//   avatar={
//     <Avatar aria-label="">
      
//     </Avatar>
//     <BottomNavigation value={} onChange={}>
      
//     </BottomNavigation>
//   }
//   action={
//     <IconButton aria-label="">
      
//     </IconButton>
//   }
//   title=""
//   subheader=""
  
// />




// Heap(non premitive) and Stack (premitive)
// premitive data will be changed in copy
// non premitive data will changed in original


// let youtube="jimi@gmail.com"
// let another=youtube
// another=""
// console.log(another)

// let userOne={
//     email:'j@gmail.com',
//     upi:'easypaisa'
// }
// let userTwo=userOne
// userTwo.email="k@gmail.com"
// console.log(userOne.email)
// console.log(userTwo.email)

// const name="jamshed"
// const repoCount=50
// // console.log(name+repoCount + "value")
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
 
// const jam="jamshedmehsud"
// console.log(jam.charAt(3))
// console.log(jam.indexOf("e"))
// const newstring=jam.slice(0,2)
// // console.log(newstring)
// const anotherstring=jam.slice(-3,2)
// console.log(anotherstring)
// const substring=jam.substring(0,4)
// console.log(substring)
// const newString="        hitesh        "
// console.log(newString)
// console.log(newString.trim())


// const jamsheed="ajmehsud12@gmail.com%20khan-j"
// console.log(jamsheed.replace('20',"fcl"))
// console.log(jamsheed.includes('12'))
// console.log(jamsheed.split('-'))



// const mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,12,4,4)
// console.log(myCreatedDate.toString())