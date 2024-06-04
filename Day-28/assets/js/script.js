var todoInput = document.querySelector('.todoInput');
var todoBtn = document.querySelector('.todoButton');
var listItem = document.querySelector('.listItem');
var todoWrapper = document.querySelector('.todoWrapper');
var count = 0;
var addTodo = [];

todoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var inputValue = todoInput.value;
    var html = `<div class="item">
                    <p class='item-${count}'>${inputValue}</p>
                    <div class="btn">
                        <div class="editBtn">
                            <i class="fas fa-edit"></i>
                        </div>
                        <div class="deleteBtn">
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                </div>`;

    count++;
    listItem.innerHTML += html;
    todoInput.value = '';
});

listItem.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-edit')) {
        console.log(e.target.outerHTML);
    }
});
