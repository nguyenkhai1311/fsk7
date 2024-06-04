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
    addTodo.push({
        count: `item-${count}`,
        value: inputValue,
    });
    count++;
    listItem.innerHTML += html;
    todoInput.value = '';
    console.log(addTodo);
});

listItem.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-edit')) {
        console.log(
            addTodo.filter(
                (item) =>
                    item.count ===
                    e.target.parentElement.parentElement.parentElement
                        .children[0].classList[0]
            )
        );
        e.target.parentElement.parentElement.parentElement.outerHTML = `<form action="#!">
        <input
            type="text"
            placeholder="Update task"
            class="todoInputAdd"
            value="${
                addTodo.filter(
                    (item) =>
                        item.count ===
                        e.target.parentElement.parentElement.parentElement
                            .children[0].classList[0]
                )[0].value
            }"
        />
        <button type="button" class="todoButton">Add Task</button>
    </form>
    `;
        var todoInputAdd = document.querySelector('.todoInputAdd');

        todoInputAdd.addEventListener('change', function (event) {
            addTodo.map((item) => {
                console.log(
                    item.count ===
                        e.target.parentElement.parentElement.parentElement
                            .children[0].classList[0]
                );
                if (
                    item.count ===
                    e.target.parentElement.parentElement.parentElement
                        .children[0].classList[0]
                ) {
                    item.value = e.target.value;
                }
                return item;
            });

            console.log(addTodo);
        });
    } else if (e.target.classList.contains('fa-trash')) {
        var isYes = confirm('Bạn có chắc chắn muốn xóa không?');
        if (isYes) {
            e.target.parentElement.parentElement.parentElement.remove();
            addTodo = addTodo.filter(
                (item) =>
                    item.count !==
                    e.target.parentElement.parentElement.parentElement
                        .children[0].classList[0].split
            );
        }
    }
});
