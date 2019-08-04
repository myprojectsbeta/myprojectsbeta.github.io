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
<input type="checkbox" id="item_${i} " class="remove"   >
<label for="item_${i}">${item.todo}</label>
</li>
  	`;
  	todo.innerHTML=displayMessages;
  });
 };

 todo.addEventListener("contextmenu", function (event) {
 	event.preventDefault();
   todolist.forEach(function (item , i) {
   	if(item.todo === event.target.innerHTML){
   		if(event.type){
   			todolist.splice( i , 1);
   		}
   		displayMessages();
   		localStorage.setItem("todo" , JSON.stringify(todolist));
   		if (todolist.length == 0){
   		window.location.reload();};
   	}
   })
 });

//todo.addEventListener("change" , function (event) {
//	let valueL = todo.querySelector("[for = "+ event.target.ge)
//})