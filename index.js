const outputPass=`<div><h1> yippee!!You are a lucky person !</h1></div><img align="centre" src="https://gifimage.net/wp-content/uploads/2017/10/children-animated-gif-1.gif" alt="funny GIF" width="30%">`
const outputFail=`<div><h2>Oops!!Your birthday is not a lucky number!</h2></div><img align="centre" src="https://media.giphy.com/media/8GScprF3OEvKw/giphy.gif" alt="funny GIF" width="20%"  >`
var birthdate=document.querySelector("#birthdate");
var birthout=document.querySelector("#birthout");

var luckydate=document.querySelector("#luckydate")
var outresult=document.querySelector("#output");
var btnenter=document.querySelector("#finalenter");
btnenter.addEventListener("click",clickHandler);
function clickHandler()
{
    // var inputT=birthdate.value ;
    // console.log(inputT);
    var spl=((birthdate.value).split("-")).join("");
    // console.log(spl);
    let sum=0;
    for(let i=0;i<spl.length;i++)
    {
        sum+=Number(spl[i]);
    }
    // console.log(sum);


var luckyNo=Number(luckydate.value);
if(sum%luckyNo==0)
{
outresult.innerHTML=outputPass;
}
else{
    outresult.innerHTML=outputFail;
}
}