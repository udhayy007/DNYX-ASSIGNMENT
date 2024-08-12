document.getElementById('addButton').addEventListener('click', function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText) {
        const todoList = document.getElementById('todoList');

       
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';


        const span = document.createElement('span');
        span.textContent = todoText;
        listItem.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        listItem.appendChild(deleteButton);

   
        todoList.appendChild(listItem);


        todoInput.value = '';


        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });
    }
});
