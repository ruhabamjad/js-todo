let form = document.getElementById("form");
let title = document.getElementById("title");
let description = document.getElementById("description");
let todoContainer = document.getElementById("todos");

let todos = localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")) : [];

function showAllTodos(){
    todos.map((item, index) => showTodos(item, index));
    function showTodos(item, index){
        let div = document.createElement("div");
        div.classList.add("todo");
        let title = document.createElement("p");
        title.classList.add("title");
        title.innerText = item.title;
        let p = document.createElement("p");
        p.innerText = item.description;
        let span = document.createElement("span");
        span.innerText = "-";
        span.classList.add("remove-btn");
        div.appendChild(title);
        div.appendChild(p);
        div.appendChild(span);
        todoContainer.appendChild(div);

        span.addEventListener("click", () => {
            emptyTodos();
            todos.splice(index, 1);
            localStorage.setItem("mytodos", JSON.stringify(todos));
            showAllTodos();
        });

    }
}

showAllTodos();

function emptyTodos(){
    let todos = document.querySelectorAll(".todo");
    todos.forEach(item => item.remove());
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    emptyTodos();
    todos.push(
        {title: title.value,
        description: description.value}
    );
    localStorage.setItem("mytodos", JSON.stringify(todos))
    showAllTodos();
});