const todoList = [];
function addList() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);

  //   make input text clear again after click add button
  inputElement.value = '';
}
