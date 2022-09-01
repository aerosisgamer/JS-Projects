// Selected Element by classes and id
let textBox = document.querySelector("#item-box");
let addBtn = document.querySelector(".add-btn");
let listItems = document.querySelector(".items");
let error = document.getElementById("error-text");

let list = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [];

let repeatedItem = () => {
  list.forEach((itemVal) => {
    if (itemVal.title == textBox.value) {
      addBtn.disabled = true;
      error.innerText = "Item already exist";
    } else {
      addBtn.disabled = false;
    }
  });

  setTimeout(() => {(error.innerText = "")}, 2000);
};

textBox.addEventListener("keyup", () => {
  addBtn.disabled = textBox.value.trim().length >= 0 ? false : true;
  repeatedItem();
});

function updateList() {
  localStorage.setItem("list", JSON.stringify(list));
  showList();
}

function showList() {
  listItems.innerHTML = "";
  for (const [key, val] of Object.entries(list)) {
    listItems.innerHTML += `<li class="item ${
      val.status ? "complete" : ""
    }" data-utkarsh="${key}" ondblclick="changeItem(this)"><input type="checkbox" id="check-item" onchange="checkedItem(this)" data-check="${key}" ${
      val.status ? "checked" : ""
    }><p class="item-name">${
      val.title
    }</p><i class="fa-solid fa-trash-can" id="delete-btn" onclick="deleteItem(this)"></i></li>`;
  }
}
showList();
updateList();

addBtn.addEventListener("click", () => {
  list.push({id:2, title: textBox.value, status: false });
  updateList();
  textBox.value = "";
  textBox.focus();
  if(textBox.value == ""){
    addBtn.disabled = true;
  }
});

let deleteItem = (ele) => {
  list.splice(ele.parentElement.dataset.utkarsh, 1);
  updateList();
};

let checkedItem = (elm) => {
  list[elm.dataset.check].status = !list[elm.dataset.check].status;
  updateList();
};

let changeItem = (e) => {
  let key = e.dataset.utkarsh;
  let itemName = e.querySelector(".item-name");
  let editItem = document.createElement('input')
  editItem.classList.add('change-item')
  editItem.setAttribute('data-key', key)
  e.replaceChild(editItem, itemName)

  let box = document.querySelector('.change-item');
  box.focus()

  box.addEventListener("keyup", (itemVal) => {
    if(itemVal.key == "Enter"){
      list[box.dataset.key].title = box.value;
      updateList();
    }
  });

}
