const container = document.querySelector("#flex__items");
const items = document.querySelector(".search__bar");
const submitButton = document.querySelector(".submit__button");
const deleteItems = document.querySelector(".delete__items");
const editItem = (id, e) => {
  e.preventDefault();
  const itemToEdit = document.querySelector(`#${id}`);
  const nuevoItem = prompt("Name to set...");
  itemToEdit.firstElementChild.innerText = nuevoItem;
  // const idNuevo = id.split("-");
  // idNuevo[0] = nuevoItem;
  // const idFinal = idNuevo.join("-");
  // itemToEdit.setAttribute("id", idFinal);
};
const deleteItem = (id, e) => {
  e.preventDefault();
  const itemToDelete = document.querySelector(`#${id}`);
  container.removeChild(itemToDelete);
};
const createItem = (item) => {
  const div = document.createElement("DIV");
  const randomValue = Math.round(Math.random() * 100);
  const id = `${item}-${randomValue}`;
  div.setAttribute("id", id);
  const editButton = document.createElement("BUTTON");
  editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editButton.addEventListener("click", (e) => editItem(id, e));
  const deleteButton = document.createElement("BUTTON");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteButton.addEventListener("click", (e) => deleteItem(id, e));
  const text = document.createElement("P");
  text.innerText = item;
  div.appendChild(text);
  div.appendChild(editButton);
  div.appendChild(deleteButton);
  container.appendChild(div);
};
deleteItems.addEventListener("click", (e) => {
  container.innerHTML = "";
});
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  createItem(items.value);
  items.value = "";
});

