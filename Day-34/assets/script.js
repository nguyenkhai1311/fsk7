const listItem = document.querySelectorAll('.list-item');

let dragged = null;

listItem.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        dragged = e.target;

        item.classList.add('dragging');
    });

    item.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    item.addEventListener('drop', (e) => {
        e.preventDefault();
        e.target.before(dragged);
        const itemDragging = document.querySelector('.dragging');
        if (itemDragging) {
            itemDragging.classList.remove('dragging');
        }
    });
});
