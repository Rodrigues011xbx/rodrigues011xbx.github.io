document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter" && taskInput.value.trim() !== "") {
            const newTask = document.createElement("li");
            newTask.innerHTML = `
                <span>${taskInput.value}</span>
                <button>Remover</button>
            `;

            taskList.appendChild(newTask);

            taskInput.value = ""; // Limpa o campo de entrada

            newTask.querySelector("button").addEventListener("click", function () {
                taskList.removeChild(newTask);
            });
        }
    });
});
