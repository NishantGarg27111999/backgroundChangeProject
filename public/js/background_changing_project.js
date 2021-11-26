console.log('welcome to project');
// let a =Math;
// console.log(a)

let hexCode;
function change_color(){
let r=15+(255-15)*Math.random();
r=Math.floor(r)
r=r.toString(16)
console.log(r)
let g=15+(255-15)*Math.random();
g=Math.floor(g)
g=g.toString(16)
console.log(g);
let b=15+(255-15)*Math.random();
b=Math.floor(b);

b=b.toString(16)
console.log(b)

 hexCode="#"+r+g+b;
console.log(hexCode)
body=document.getElementsByTagName("body");
console.log(body);
body[0].style.background=hexCode;
// body[0].style.backgroundColor=`rgb(${r},${g},${b})`;
// console.log(`rgb(${r},${g},${b})`);
}
change_color();

let btn=document.getElementById("btn");
btn.innerText=hexCode;
btn.addEventListener("click",()=>{
    console.log("clicked")
    change_color();
})

// btn.style.boxShadow=`0px 5px 8px -1px ${hexCode}`;


