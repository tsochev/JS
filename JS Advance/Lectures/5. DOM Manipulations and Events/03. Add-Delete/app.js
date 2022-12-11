function addItem() {
    let input = document.getElementById('newItemText').value;
    let li = document.createElement('li');

    li.textContent = input;

    //create [delete] anchor
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);


    document.getElementById('items').appendChild(li);

    document.getElementById('newItemText').value = '';

    function onDelete(event) {
        event.target.parentElement.remove();
    }
}



