
//localStorage.clear();

function validation() {
  var name = document.getElementById("name").value;
  // var status = document.getElementById("complete");

  if (!name) {
    alert("Name is required!");
    return false;
  }
  return true;
}

// filter when user click pending all data show pending
function done() {
  var userdata;

  userdata = JSON.parse(localStorage.getItem("userdata"));
  let final = userdata.filter((item) => item.status == "Working");

  var html = "";

  final.forEach((element, index) => {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.status + "</td>";
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

// getlocalstorage data and display
function showData() {
  var userdata;
  if (localStorage.getItem("userdata") == null) {
    userdata = [];
  } else {
    userdata = JSON.parse(localStorage.getItem("userdata"));
  }

  var html = "";

  userdata.forEach((element, index) => {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.status + "</td>";
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
    var status = document.getElementById("complete");
    if (status.checked == true) {
      status = "Complete";
    } else {
      status = "Working";
    }
    var userdata;
    if (localStorage.getItem("userdata") == null) {
      userdata = [];
    } else {
      userdata = JSON.parse(localStorage.getItem("userdata"));
    }

    userdata.push({
      name: name,
      status,
    });

    localStorage.setItem("userdata", JSON.stringify(userdata));
    showData();

    document.getElementById("name").value = "";
    document.getElementById("complete").checked = false;
  }
}

function deleteData(index) {
  var userdata;
  if (localStorage.getItem("userdata") == null) {
    userdata = [];
  } else {
    userdata = JSON.parse(localStorage.getItem("userdata"));
  }
  userdata.splice(index, 1);

  localStorage.setItem("userdata", JSON.stringify(userdata));
  showData();
}

// update data
function updateData(index) {
  document.getElementById("submit").style.display = "none";
  document.getElementById("update").style.display = "block";

  var userdata;
  if (localStorage.getItem("userdata") == null) {
    userdata = [];
  } else {
    userdata = JSON.parse(localStorage.getItem("userdata"));
  }

  console.log( userdata[index].name);

  document.getElementById("name").value = userdata[index].name;
  document.getElementById("complete").value = userdata[index].status;

  //console.log(document.getElementById("name").value);

  document.querySelector("#update").onclick = function () {
    userdata[index].name = document.getElementById("name").value;
    userdata[index].status = document.getElementById("complete");

    if (userdata[index].status.checked == true) {
      userdata[index].status = "Complete";
    } else {
      userdata[index].status = "Working";
    }

    localStorage.setItem("userdata", JSON.stringify(userdata));
    showData();

    document.getElementById("submit").style.display = "block";
    document.getElementById("update").style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("complete").checked = false;

  };
}
