// array penampungan todolist
const todoList = [
  {
    name: 'pinjem',
    dueDate: '2022-02-02',
  },
  {
    name: 'helo',
    dueDate: '2022-02-03',
  },
];

// fungsi untuk menampilkan todolist
renderTodo();
function renderTodo() {
  // penampungan nilai dari index array
  let todolistHTML = '';
  // looping dimulai dari 0 karena i = 0
  // akan berjalan sampai i = panjang array
  // kalau tidak terpenuhi akan ditambah +1 (increment)
  for (i = 0; i < todoList.length; i++) {
    // ini untuk penampungan nilai index didalam array
    const todo = todoList[i];
    const name = todo.name;
    const dueDate = todo.dueDate;
    // html digunakan untuk menampung string p + isi array
    const html = `<p>${name} ${dueDate}<button onclick="todoList.splice(${i}, 1); renderTodo();">Delete</button></p>`;
    // nah variabel let diatas tadi ditambah value html
    todolistHTML += html;
  }
  // kemudian dom dibawah diisi dengan value dari todolistHTML
  document.querySelector('.tdList').innerHTML = todolistHTML;
}

function addList() {
  // make a input to a variable
  const inputElement = document.querySelector('.js-input');
  const dateInput = document.querySelector('.js-date');
  const name = inputElement.value;
  const date = dateInput.value;

  //   add value to array from input with add button
  todoList.push({
    name: name,
    dueDate: date,
  });

  console.log(todoList);

  //   make input text clear again after click add button
  inputElement.value = '';
  dateInput.value = '';

  // menjalankan fungsi diatas setiap kali add list baru
  renderTodo();
}
