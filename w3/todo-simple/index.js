let ctr = 0;

function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    const newDivEl = document.createElement("div");

    newDivEl.setAttribute("id", ctr);
    newDivEl.setAttribute("style", "display: flex;");

    newDivEl.innerHTML = '<h4>' + value + '</h4> <button onclick="deleteTodo(' + ctr + ')">delete</button>';
    document.querySelector("body").appendChild(newDivEl);

    ctr = ctr + 1;
}

function deleteTodo(index) {
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}