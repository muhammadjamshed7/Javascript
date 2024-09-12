const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["bateman","superman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)   
 
 
// const allHero=marvel_heros.concat(dc_heros)
// console.log(allHero)
// const newHeros=[...marvel_heros,...dc_heros]
// console.log(newHeros)
const anotherArry=[1,2,3,[4,5,6],[5],[9,5],[1,2,3,[44,55,66]]]
const real_another_array=anotherArry.flat(Infinity)
console.log(real_another_array)
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });
anotherArry.forEach((item,index)=>{
    console.log(`${index} : ${item}`)
})