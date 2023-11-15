// array penampungan todolist
const todoList = JSON.parse(localStorage.getItem('todoList')) || [
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
  todoList.forEach((element) => {});
  (todo) => {
    const { name, dueDate } = todo;
    // html digunakan untuk menampung string p + isi array
    const html = `<p>${name} ${dueDate}<button onclick="todoList.splice(${index}, 1); renderTodo();
      saveToStorage();
      ">Delete</button></p>`;
    // nah variabel let diatas tadi ditambah value html
    todolistHTML += html;
  };

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

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

document.querySelector('.js-add').addEventListener('click', () => {
  addList();
});
