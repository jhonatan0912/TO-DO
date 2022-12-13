const form = document.getElementById('form');
let input = document.getElementById('input');
let itemsContainer = document.getElementById('items-container');
let count = 0;

form.addEventListener("submit", e => {
  e.preventDefault();
  let itemBox = document.createElement('div');
  itemBox.innerHTML = `
  <div class="border-b flex justify-between p-3 items-center" id="item${count += 1}">
    <div>${input.value}</div>
    <img src="./images/icon-cross.svg" class="cursor-pointer btn-delete">
    </div>`;
  itemsContainer.append(itemBox);
})