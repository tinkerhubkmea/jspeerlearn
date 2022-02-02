const btt=document.getElementById("btt")
const color=document.getElementsByClassName("color")
const a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

btt.addEventListener("click",() =>{
    const rndno=randno();
    document.body.style.backgroundColor=rndno;

})

function randno(){
    const c="#"+a[Math.floor(Math.random()*a.length)]+a[Math.floor(Math.random()*a.length)]+a[Math.floor(Math.random()*a.length)]+a[Math.floor(Math.random()*a.length)]+a[Math.floor(Math.random()*a.length)]+a[Math.floor(Math.random()*a.length)]
    return c
}

