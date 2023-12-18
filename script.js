function newElement(event) {
    var li = document.createElement("li");
    var inputValue = document.getElementById("listinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        //document.getElementById("listitem").appendChild(li); //Line not working because i am using get element by ID we ana aslan 3amlha class
        document.querySelector(".listitem").appendChild(li); //changed it to queryselector 3lshan ana using class
    }
    document.getElementById("listinput").value = "";
}

function toggleChecked(event) {
    if (event.target.tagName === 'LI') { 
        event.target.classList.toggle('checked');
    }
}
//when accessing the tagName property, it returns the tag name in uppercase
//So, 'LI' is used to match the uppercase representation of the tag name.