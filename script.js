
const start=document.querySelector("#start");
const stop=document.querySelector("#stop");
const pause=document.querySelector("#pause");
const restart=document.querySelector("#restart");
const reset=document.querySelector("#reset");
const watch=document.querySelector("#time");
let mil=0,sec=0,min=0;
let timer;

start.addEventListener("click",(e)=>{
    if(!timer) {
        timer = setInterval(runWatch, 10);
    }
})
function runWatch(){
    watch.textContent=(min<10?"0"+min:min )+":"+(sec<10?"0"+sec:sec)+":"+(mil<10?"0"+mil:mil);
    mil++;
    if(mil===100){
        mil=0;
        sec++;
    }
    if(sec===60){
        sec=0;
        min++;
    }
}
pause.addEventListener("click",(e)=>{
    clearInterval(timer);
    timer=false;
});
stop.addEventListener("click",(e)=>{
    change()
});
restart.addEventListener("click",(e)=>{
    if(!timer) {
        timer = setInterval(runWatch, 10);
    }
})
reset.addEventListener("click",(e)=>{
change()
})
function change(){
    clearInterval(timer);
    timer=false;
    mil=0
    sec=0;
    min=0;
    watch.textContent=(min<10?"0"+min:min )+":"+(sec<10?"0"+sec:sec)+":"+(mil<10?"0"+mil:mil);
}
