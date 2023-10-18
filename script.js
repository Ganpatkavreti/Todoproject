document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

    document.getElementById('addButton').addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `
                ${taskText}
                <button class="deleteButton">Delete</button>
            `;
            taskList.appendChild(li);
            newTaskInput.value = '';
            attachDeleteListener(li);
        }
    });

    function attachDeleteListener(li) {
        const deleteButton = li.querySelector('.deleteButton');
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
    }
});
