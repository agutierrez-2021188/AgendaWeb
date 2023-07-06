const tablaP = document.querySelector('#containerP');
const addTarea = document.querySelector('#addTarea');
const tPendientes = document.querySelector('#pendientes');

tablaP.addEventListener('submit', function (event) {
    event.preventDefault();
    const task = addTarea.value;
    if (!task) return;
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    ${task}
    <button class="btn btn-success">Editar</button>
    <button class="btn btn-danger">Eliminar</button>`;
    tPendientes.appendChild(listItem);
    addTarea.value = '';
});

tPendientes.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-danger')) {
        event.target.parentElement.remove();
    } else if (event.target.classList.contains('btn-success')) {
        const task = prompt('Tarea Pendiente: ', event.target.previousSibling.textContent);
        if (task) event.target.previousSibling.textContent = task;
    }
});