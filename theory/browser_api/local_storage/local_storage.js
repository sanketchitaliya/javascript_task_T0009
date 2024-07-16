//localStorage.clear();

function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;

    if (!name) {
        alert("Name is required!");
        return false;
    }
    if (!email) {
        alert("Email is required!");
        return false;
    }
    if (!age) {
        alert("Age is required!");
        return false;
    }
    if (!address) {
        alert("Address is required!");
        return false;
    }
    return true;
}

function showData() {
    var userdata;
    if (localStorage.getItem('userdata') == null) {
        userdata = [];
    } else {
        userdata = JSON.parse(localStorage.getItem('userdata'));
    }

    var html = "";

    userdata.forEach((element, index) => {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += `<td> 
        <button class="btn btn-danger" onclick="deleteData(${index})">
            Delete
        </button>
        <button class="btn btn-warning m-2" onclick="updateData(${index})">
            Edit
        </button>
        
        </td>`;
        html += "</tr>";

    });

    document.querySelector("#crudtable tbody").innerHTML = html;
}

// load event use when page load that time call this event
document.onload = showData();

function adddata() {
    if (validation() == true) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var userdata;
        if (localStorage.getItem('userdata') == null) {
            userdata = [];
        } else {
            userdata = JSON.parse(localStorage.getItem('userdata'));
        }

        userdata.push({
            name: name,
            email: email,
            age: age,
            address: address,
        });

        localStorage.setItem('userdata', JSON.stringify(userdata))
        showData();

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
    }

}

function deleteData(index) {
    var userdata;
    if (localStorage.getItem('userdata') == null) {
        userdata = [];
    } else {
        userdata = JSON.parse(localStorage.getItem('userdata'));
    }
    userdata.splice(index, 1);

    localStorage.setItem('userdata', JSON.stringify(userdata))
    showData();

}

function updateData(index) {
    document.getElementById("submit").style.display = 'none';
    document.getElementById("update").style.display = 'block';

    var userdata;
    if (localStorage.getItem('userdata') == null) {
        userdata = [];
    } else {
        userdata = JSON.parse(localStorage.getItem('userdata'));
    }

    document.getElementById("name").value = userdata[index].name;
    document.getElementById("email").value = userdata[index].email;
    document.getElementById("age").value = userdata[index].age;
    document.getElementById("address").value = userdata[index].address;


    document.querySelector("#update").onclick = function () {
        userdata[index].name = document.getElementById("name").value;
        userdata[index].email = document.getElementById("email").value;
        userdata[index].age = document.getElementById("age").value;
        userdata[index].address = document.getElementById("address").value;

        localStorage.setItem('userdata', JSON.stringify(userdata))
        showData();

        document.getElementById("submit").style.display = 'block';
        document.getElementById("update").style.display = 'none';
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
    }
}