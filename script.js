function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("listinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("listitem").appendChild(li);
    }
    document.getElementById("listinput").value = "";

    li.onclick = function() {
        li.classList.toggle('checked');
    };
}

function toggleChecked(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}