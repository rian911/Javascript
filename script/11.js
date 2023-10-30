// array penampungan todolist
const todoList = ['pinjem', 'l00'];

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
    // html digunakan untuk menampung string p + isi array
    const html = `<p>${todo}</p>`;
    // nah variabel let diatas tadi ditambah value html
    todolistHTML += html;
  }
  // kemudian dom dibawah diisi dengan value dari todolistHTML
  document.querySelector('.tdList').innerHTML = todolistHTML;
}

function addList() {
  // make a input to a variable
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  //   add value to array from input with add button
  todoList.push(name);
  console.log(todoList);

  //   make input text clear again after click add button
  inputElement.value = '';

  // menjalankan fungsi diatas setiap kali add list baru
  renderTodo();
}
