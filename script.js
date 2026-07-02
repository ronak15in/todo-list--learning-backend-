const addbtn = document.querySelector("#button-add");
const tasklist=document.querySelector(".tasklist");
const task=document.querySelector("#taskinp");
const emp=document.querySelector(".forempty");


let toaddtask="";
task.addEventListener("input",()=>{
    toaddtask=task.value;
})
let cnt=0;
addbtn.addEventListener("click",()=>{
    if(toaddtask==""){
        return ;
    }
    if(cnt==3){
        emp.hidden=false;
        emp.innerHTML="MAXIMUM TASK LIMIT REACHED!";
        return;
    }
    emp.hidden=true;
    tasklist.insertAdjacentHTML(
        "beforeend",
        `<li class="task-${++cnt}"><div class="decor">${toaddtask}</div></li>`
    );
    toaddtask="";
    task.value="";
});