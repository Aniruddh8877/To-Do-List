const inputTask=document.getElementById("input-task");
let listBox=document.getElementById("list-box");
function addTask(){
if(inputTask.value ==='')
alert("please write somthing!");
else{
let li =document.createElement("li");
li.innerHTML =inputTask.value;
listBox.appendChild(li);
let span =document.createElement("span");
span.innerHTML="\u00d7";
li.appendChild(span);
}
inputTask.value="";
}
listBox.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
e.target.classList.toggle("check");
}
else if (e.target.tagName === "SPAN"){
e.target.parentElement.remove();
}
}, false);