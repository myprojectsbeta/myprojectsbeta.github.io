//инпут 
let addMassage = document.querySelector(".message");
// кнопка add
let addButton = document.querySelector(".add");
//список 
let todo = document.querySelector(".todo");

let todolist = [];
if(localStorage.getItem('todo')){
  todolist = JSON.parse(localStorage.getItem("todo"));
   displayMessages();
}

addButton.addEventListener("click", function () {
	let newToDo = {
      todo: addMassage.value ,
      checked : false ,
      important : false 
	};
  todolist.push(newToDo);

	displayMessages();
    localStorage.setItem("todo" , JSON.stringify(todolist));
});


function displayMessages() {
	let  displayMessages= "";
  todolist.forEach(function (item , i) {
  	  displayMessages += `
<li>
<input type="checkbox" class="iii"  id="item_${i} " ${item.checked ? "checked" : "" } >
<label for="item_${i}">${item.todo}</label>
</li>
  	`;
  	todo.innerHTML=displayMessages;
  });
 };

 todo.addEventListener("click", function (event) {
 	
   todolist.forEach(function (item , i) {
   	if(item.todo === event.target.innerHTML){
   		
   			todolist.splice( i , 1);
   		
 displayMessages();
   		localStorage.setItem("todo" , JSON.stringify(todolist));
   		if (todolist.length == 0){
  		window.location.reload();};
   	}
   })
 });

todo.addEventListener("change" , function (event) {
  let IdInput = event.target.getAttribute("id");
  let forLabel = todo.querySelector("[for=" + IdInput + "]");
  let valueLabel = forLabel.innerHTML;
   todolist.forEach(function (item) {
      if(item.todo === valueLabel){
        item.checked = !item.checked;
        localStorage.setItem("todo" , JSON.stringify(todolist));
      }
   })
})


